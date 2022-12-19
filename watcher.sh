#!/bin/bash
#https://stackoverflow.com/questions/66857291/how-to-execute-a-shell-script-when-a-file-changes
echo "$(clear; cd ./Reference; gcc ./Reference/Reference.c; ./Reference/a.out; cd ..)";
echo "$(gcc $1/$2; $1/a.out);";
LTIME=$(stat -f %Sm $1/$2);
while true
do
  ATIME=$(stat -f %Sa $1/$2)
  if [[ "$ATIME" != "$LTIME" ]]; then
        echo "$(./Reference/a.out)";
        echo "$(gcc $1/$2;$1/a.out)";
        LTIME=$ATIME
  fi
  sleep 1
done