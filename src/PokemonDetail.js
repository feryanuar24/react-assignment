import { useEffect, useState } from "react";
import { Badge, Tr, Td, HStack, VStack, Heading, Box } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Table } from "@chakra-ui/react";
import { Tbody } from "@chakra-ui/react";

const Detail = ({ pokemon }) => {
  return (
    <Box>
      {pokemon && (
        <Box role="pokemon-detail">
          <HStack>
            <Heading>{pokemon.name}</Heading>
          </HStack>
          <HStack>
            {pokemon.types.map((e) => (
              <Badge>{e.type.name}</Badge>
            ))}
          </HStack>
          <HStack>
            <Image src={pokemon.sprites.front_default} />
            <Image src={pokemon.sprites.back_default} />
            <Image src={pokemon.sprites.front_shiny} />
            <Image src={pokemon.sprites.back_shiny} />
          </HStack>
          <HStack>
            <Table>
              <Tbody>
                <Tr>
                  <Td>Height</Td>
                  <Td>{pokemon.height}</Td>
                </Tr>
                <Tr>
                  <Td>Weight</Td>
                  <Td>{pokemon.weight}</Td>
                </Tr>
                <Tr>
                  <Td>Base Experience</Td>
                  <Td>{pokemon.base_experience}</Td>
                </Tr>
                <Tr>
                  <Td>Abilities</Td>
                  <Td>
                    {pokemon.abilities.map((e) => (
                      <p>{e.ability.name}</p>
                    ))}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Stats</Td>
                  <Td>
                    {pokemon.stats.map((e) => (
                      <p>
                        {e.stat.name} : {e.base_stat}
                      </p>
                    ))}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </HStack>
        </Box>
      )}
    </Box>
  );
};
const Page = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon(pokemonId);
  }, [pokemonId]);

  return <Detail pokemon={pokemon} />;
};

export default Page;
