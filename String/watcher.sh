#!/bin/bash
#https://stackoverflow.com/questions/66857291/how-to-execute-a-shell-script-when-a-file-changes
echo "$(clear; cd ../Reference; gcc ../Reference/Reference.c; ../Reference/a.out; cd ../String;)";
echo "$(make;)";
echo "$(make clean;)";
echo "$(./stringTest;)";

TIMEA=$(stat -f %Sm $1;);
TIMEB=$(stat -f %Sm $2;);
TIMEC=$(stat -f %Sm $3;);
# TIMED=$(stat -f %Sm $4;);
# TIMEE=$(stat -f %Sm $5;);
# TIMEF=$(stat -f %Sm $6;);
echo $@

while true
do

  ATIMEA=$(stat -f %Sa $1;);
  ATIMEB=$(stat -f %Sa $2;);
  ATIMEC=$(stat -f %Sa $3;);
  # ATIMED=$(stat -f %Sa $4;);
  # ATIMEE=$(stat -f %Sa $5;);
  # ATIMEF=$(stat -f %Sa $6;);

  if [[ "$ATIMEA" != "$TIMEA" ]] || [[ "$ATIMEB" != "$TIMEB" ]] || [[ "$ATIMEC" != "$TIMEC" ]] #|| [[ "$ATIMED" != "$TIMED" ]] || [[ "$ATIMEE" != "$TIMEE" ]] || [[ "$ATIMEF" != "$TIMEF" ]]
  then 
        echo "$(../Reference/a.out;)";
        echo "$(make;)";
        echo "$(make clean;)";
        echo "$(./stringTest;)";

        TIMEA=$ATIMEA;
        TIMEB=$ATIMEB;
        TIMEC=$ATIMEC;
        # TIMED=$ATIMED;
        # TIMEE=$ATIMEE;
        # TIMEF=$ATIMEF;
  fi
  sleep 1
done