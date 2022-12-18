#!/bin/bash
echo "$(gcc ./Test.c; ./a.out)"
LTIME=$(stat -f %Sm ./Test.c)
while true
do
  ATIME=$(stat -f %Sa ./Test.c)
  if [[ "$ATIME" != "$LTIME" ]]; then
        echo "$(gcc ./Test.c; ./a.out)"
        LTIME=$ATIME
  fi
  sleep 1
done