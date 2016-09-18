#!/bin/sh

POKEAPI='http://pokeapi.co/api/v2/'
TO_DOWNLOAD=$1
GENERATION=$2
HELP_TEXT="Usage:\tsh scripts/data_capture.sh <what_to_download> <generation_number>\n
\t<what_to_download>:\n
    \t\tpokemon: update pokémon data\n
    \t\ttypes: update types data\n
    \t\tmoves: update moves data\n
\t<generation_number>: Only generations between 1 and 6 available"

case ${TO_DOWNLOAD} in
	'pokemon')
		echo 'Updating pokémon data...'
	;;
	'types')
		echo 'Updating types data...'
	;;
	'moves')
		echo 'Updating moves data...'
	;;
	*)  echo ${HELP_TEXT}
	    exit 1
esac

GEN_INTERVAL=``
echo "Generation selected: $GENERATION"
case ${GENERATION} in
	'1')
		echo 'Pokémon interval: 1~151'
		GEN_INTERVAL=`seq 1 151`
	;;
	'2')
		echo 'Pokémon interval: 152~251'
		GEN_INTERVAL=`seq 152 251`
	;;
	'3')
		echo 'Pokémon interval: 252~386'
	    GEN_INTERVAL=`seq 252 386`
	;;
	'4')
		echo 'Pokémon interval: 387~493'
	    GEN_INTERVAL=`seq 387 493`
	;;
	'5')
		echo 'Pokémon interval: 494~649'
	    GEN_INTERVAL=`seq 494 649`
	;;
	'6')
		echo 'Pokémon interval: 650~721'
	    GEN_INTERVAL=`seq 650 721`
	;;
	*)  echo ${HELP_TEXT}
		exit 1
	;;
esac

DIR='data/'${TO_DOWNLOAD}
mkdir -p ${DIR}
cd ${DIR}

for i in ${GEN_INTERVAL}
do
    echo "Getting data of pokémon #$i"
    wget -nv ${POKEAPI}'pokemon/'${i} -O ${i}'.json'
done