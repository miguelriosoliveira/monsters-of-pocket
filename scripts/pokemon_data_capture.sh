#!/bin/bash
POKEAPI='http://pokeapi.co/api/v2/'
mkdir -p data/pokemon
cd data/pokemon
for i in `seq 1 151`
do
    echo "Getting data of pokémon #$i"
    wget -nv ${POKEAPI}'pokemon/'${i} -O ${i}'.json'
done