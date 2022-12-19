#!/bin/bash
#https://stackoverflow.com/questions/66857291/how-to-execute-a-shell-script-when-a-file-changes
echo "$(clear; cd ./Reference; gcc ./Reference/Reference.c; ./Reference/a.out; cd ..;)";
echo "$(cd $1; gcc $2; ./a.out; cd..;)";
LTIME=$(stat -f %Sm $1/$2;);
while true
do
  ATIME=$(stat -f %Sa $1/$2;)
  if [[ "$ATIME" != "$LTIME" ]]; then
        echo "$(./Reference/a.out;)";
        echo "$(cd $1; gcc $2; ./a.out; cd..;)";
        LTIME=$ATIME
  fi
  sleep 1
done