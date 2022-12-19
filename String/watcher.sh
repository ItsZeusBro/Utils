#!/bin/bash
#https://stackoverflow.com/questions/66857291/how-to-execute-a-shell-script-when-a-file-changes
echo "$(clear; cd ../Reference; gcc ../Reference/Reference.c; ../Reference/a.out; cd ../String;)";
echo "$(make; ./stringTest;)";

TIMEA=$(stat -f %Sm $1;);
TIMEB=$(stat -f %Sm $2;);
TIMEC=$(stat -f %Sm $3;);
while true
do

  ATIMEA=$(stat -f %Sa $1;);
  ATIMEB=$(stat -f %Sa $2;);
  ATIMEC=$(stat -f %Sa $3;);

  if [[ "$ATIMEA" != "$TIMEA" ]] || [[ "$ATIMEB" != "$TIMEB" ]] || [[ "$ATIMEC" != "$TIMEC" ]]; then 
        echo "$(../Reference/a.out;)";
        echo "$(make; ./stringTest;)";
        TIMEA=$ATIMEA;
        TIMEB=$ATIMEB;
        TIMEC=$ATIMEC;
  fi
  sleep 1
done