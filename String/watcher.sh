#!/bin/bash

#https://stackoverflow.com/questions/66857291/how-to-execute-a-shell-script-when-a-file-changes
echo "$(clear; cd ../Reference; gcc ../Reference/Reference.c; ../Reference/a.out; cd ../String;)";
echo "$(make;)";
echo "$(make clean;)";
echo "$(./stringTest;)";

TIMEA=$(stat -f %Sm $1;);
TIMEB=$(stat -f %Sm $2;);
TIMEC=$(stat -f %Sm $3;);

echo $@

while true
do

  ATIMEA=$(stat -f %Sa $1;);
  ATIMEB=$(stat -f %Sa $2;);
  ATIMEC=$(stat -f %Sa $3;);


  if [[ "$ATIMEA" != "$TIMEA" ]] || [[ "$ATIMEB" != "$TIMEB" ]] || [[ "$ATIMEC" != "$TIMEC" ]] #|| [[ "$ATIMED" != "$TIMED" ]] || [[ "$ATIMEE" != "$TIMEE" ]] || [[ "$ATIMEF" != "$TIMEF" ]]
  then 
        echo "$(../Reference/a.out;)";
        echo "$(make;)";
        echo "$(make clean;)";
        echo "$(./stringTest;)";

        TIMEA=$ATIMEA;
        TIMEB=$ATIMEB;
        TIMEC=$ATIMEC;
  fi
  sleep 1
done

#https://stackoverflow.com/questions/66857291/how-to-execute-a-shell-script-when-a-file-changes
# echo "$(clear; cd ../Reference; gcc ../Reference/Reference.c; ../Reference/a.out; cd ../String;)";
# echo "$(make clean;)";
# echo "$(make;)";
# echo "$(make clean;)";
# echo "$(./stringTest;)";
# TIMEA;
# TIMEB;
# while true
# do
#   for i in "$@"; do
#       TIMEA = $(stat -f %Sm $i;);
#       echo "$i";
#       TIMEB = $(stat -f %Sm $i;);
#       if [[ "$TIMEA" != "$TIMEB" ]]; then
#           echo "$(../Reference/a.out;)";
#           echo "$(make;)";
#           echo "$(make clean;)";
#           echo "$(./stringTest;)";
#       fi
#   done

# done