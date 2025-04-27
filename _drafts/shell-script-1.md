---
title: The art of shell scripts, part 1
excerpt_separator: <!--more-->
---

This is about maintainable shell scripts, not *bash* mind you, but
`/bin/sh`. Shell scripts almost always look like hacks written in
panic, but often linger around for a long time. I have written *a lot*
of shell scripts over the years, and have settled for a pattern, and
some functions that enhance readability, documentation and
maintainability (at least IMO).

<!--more-->

## Why not bash?

First, `bash` is not present in all environments (e.g. embedded
systems), but `/bin/sh` almost certainly is.

`Bash` is feature bloated. It has accumulated so many tricks,
features, and multiple ways to do the same things over the years, so a
script written by a bash-virtuoso is very hard to maintain for the
average script maintainer. Further, since there are so many ways to do
things, even two bash-virtuosos may have problems maintaining each
others scripts. `/bin/sh` engourages to keep things simple.

And, all bells and whistles in `bash` aren't really needed.

That said, `bash` is a great interactive shell. I use is myself.

## Do something, or die trying

Failures that should exit the script with a fail code and a message
should be handled with a function, not repeated if-statements.

```sh
die() {
    echo "ERROR: $*" >&2
    # (cleanup...)
    exit 1
}
test -r "$config" || die "Not readable [$config]"
trap "die Interrupted" INT TERM
```

To trap signals ensures that the cleanup code is executed.  Note also
that files that you want to read should be tested with the `-r`
option, not `-e`.


## Sub-commands

Except for the most trivial scripts sub-commands is a good idea. One
script with sub-commands is easier to maintain, and document, than a
collection of small scripts. Sub-commands are functions that are
prefixed with `cmd_`.

```sh
cmd=$1
shift
grep -q "^cmd_$cmd()" $0 || die "Invalid command [$cmd]"
# (handle options...)
cmd_$cmd "$@"
status=$?
# (cleanup...)
exit $status
```

This pattern makes it easy to add sub-commands, without editing a
central place. We will get back to options later.


## Help printout

From observation, I would say this is the most common way to do help
printouts:

```sh
help() {
    echo ""
    echo "utility"
    echo "  A utility that performs something"
    echo ""
    echo "Options:"
    echo "  -h - This help printout"
# ...
}
```

Beside being ugly, this is hard to maintain, and updating the
(central) help function is easily forgotten. Especially when
sub-commands are used, we need something better.

```
#! /bin/sh
## utility
##   A utility that performs something.
##
## Commands:
##
help() {
    grep '^##' $0 | cut -c3-
    exit 0
}
test -n "$1" || help
echo "$1" | grep -qi "^help\|-h" && help

##   init
##     Init structures
cmd_init() {
    # ...
}
```

Here all lines starting with `##` are printed as help. The help for
the sub-command is placed at the sub-command function. The comments
also serves as code documentation.


## Temporary data and cleanup

