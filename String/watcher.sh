#!/bin/bash
#https://stackoverflow.com/questions/66857291/how-to-execute-a-shell-script-when-a-file-changes
echo "$(clear; cd ../Reference; gcc ../Reference/Reference.c; ../Reference/a.out; cd ../String;)";
echo "$(make; ./stringTest;)";
TIME1=$(stat -f %Sm $1;);
TIME2=$(stat -f %Sm $2;);
TIME3=$(stat -f %Sm $3;);

while true
do
  ATIME1=$(stat -f %Sa $1;);
  ATIME2=$(stat -f %Sa $2;);
  ATIME3=$(stat -f %Sm $3;);

  if [[ ("$ATIME1" != "$TIME1") && ("$ATIME2" != "$TIME2") && ("$ATIME3" != "$TIME3")]]; then
        echo "$(../Reference/a.out;)";
        echo "$(make; ./stringTest;)";
        TIME1=$ATIME1;
        TIME2=$ATIME2;
        TIME3=$ATIME3;
  fi
  sleep 1
done