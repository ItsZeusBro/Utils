#!/bin/bash
#https://stackoverflow.com/questions/66857291/how-to-execute-a-shell-script-when-a-file-changes
echo "$(clear; gcc ./Reference/Reference.c; ./Reference/a.out)"
echo "$(gcc $1/$2;$1/a.out)"
LTIME=$(stat -f %Sm ./Test.c)
while true
do
  ATIME=$(stat -f %Sa $1/$2)
  if [[ "$ATIME" != "$LTIME" ]]; then
        echo "$(gcc $1/$2; $1/a.out"
        LTIME=$ATIME
  fi
  sleep 1
done