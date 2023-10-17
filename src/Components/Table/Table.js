import React from 'react'
import styled from 'styled-components'
import Delete from '../../assets/icons/DeleteSvg';
import Edit from '../../assets/icons/EditSvg';

const Table1Container = styled.table``

const Thead = styled.thead``;

const Tr = styled.tr`
  &:hover {
    background: #212121;
    /* box-shadow: 0 0 5px 2px rgba(0,0,0,.1); */
    scale: 1.01;
  }
`;


const Th = styled.th`
  color: #777;
  width: 160px;
  padding: 1rem 0;
  text-align: start;
  /* background: #000; */
  font-family: FuturaBook;

`;

const Tbody = styled.tbody``;

const Td = styled.td`
  color: var(--title);
  /* background: #000; */
  font-family: FuturaBook;
  padding: .3rem 0;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  /* background: var(--admin-header); */
  justify-content: center;
  padding: .5rem;
  border-radius: 3rem;
`;

const DeleteButton = styled.button`
  background: #950505;
  border: none;
  outline: none;
  border-radius: 50%;
  padding: .1rem;
  cursor: pointer;
`;

const EditButton = styled.button`
  background: #1b1464;
  border: none;
  outline: none;
  border-radius: 50%;
  padding: .1rem;
  cursor: pointer;
`;

 
const Table = () => {
  return (
    <Table1Container>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Categoria</Th>
          <Th>Marca</Th>
          <Th>Modelo</Th>
          <Th>Desc</Th>
          <Th>img</Th>
          <Th>Link</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>smartphone</Td>
          <Td>smartphone</Td>
          <Td>Sony</Td>
          <Td>Xperia X</Td>
          <Td>Faster and secure</Td>
          <Td>http://img</Td>
          <Td>http://e34453f324sdf</Td>
          <Td>
            <Buttons>
              <DeleteButton>
                <Delete size='20' fill="#e6e6e6"/>

              </DeleteButton>
              <EditButton>

                <Edit size='20' fill="#e6e6e6"/>
              </EditButton>
            </Buttons>
          </Td>
        </Tr>
        <Tr>
          <Td>smartphone</Td>
          <Td>smartphone</Td>
          <Td>Sony</Td>
          <Td>Xperia X</Td>
          <Td>Faster and secure</Td>
          <Td>http://img</Td>
          <Td>http://e34453f324sdf</Td>
          <Td>
            <Buttons>
              <DeleteButton>
                <Delete size='20' fill="#e6e6e6"/>

              </DeleteButton>
              <EditButton>

                <Edit size='20' fill="#e6e6e6"/>
              </EditButton>
            </Buttons>
          </Td>
        </Tr>
        <Tr>
          <Td>smartphone</Td>
          <Td>smartphone</Td>
          <Td>Sony</Td>
          <Td>Xperia X</Td>
          <Td>Faster and secure</Td>
          <Td>http://img</Td>
          <Td>http://e34453f324sdf</Td>
          <Td>
            <Buttons>
              <DeleteButton>
                <Delete size='20' fill="#e6e6e6"/>

              </DeleteButton>
              <EditButton>

                <Edit size='20' fill="#e6e6e6"/>
              </EditButton>
            </Buttons>
          </Td>
        </Tr>
        <Tr>
          <Td>smartphone</Td>
          <Td>smartphone</Td>
          <Td>Sony</Td>
          <Td>Xperia X</Td>
          <Td>Faster and secure</Td>
          <Td>http://img</Td>
          <Td>http://e34453f324sdf</Td>
          <Td>
            <Buttons>
              <DeleteButton>
                <Delete size='20' fill="#e6e6e6"/>

              </DeleteButton>
              <EditButton>

                <Edit size='20' fill="#e6e6e6"/>
              </EditButton>
            </Buttons>
          </Td>
        </Tr>
        <Tr>
          <Td>smartphone</Td>
          <Td>smartphone</Td>
          <Td>Sony</Td>
          <Td>Xperia X</Td>
          <Td>Faster and secure</Td>
          <Td>http://img</Td>
          <Td>http://e34453f324sdf</Td>
          <Td>
            <Buttons>
              <DeleteButton>
                <Delete size='20' fill="#e6e6e6"/>

              </DeleteButton>
              <EditButton>

                <Edit size='20' fill="#e6e6e6"/>
              </EditButton>
            </Buttons>
          </Td>
        </Tr>
        <Tr>
          <Td>smartphone</Td>
          <Td>smartphone</Td>
          <Td>Sony</Td>
          <Td>Xperia X</Td>
          <Td>Faster and secure</Td>
          <Td>http://img</Td>
          <Td>http://e34453f324sdf</Td>
          <Td>
            <Buttons>
              <DeleteButton>
                <Delete size='20' fill="#e6e6e6"/>

              </DeleteButton>
              <EditButton>

                <Edit size='20' fill="#e6e6e6"/>
              </EditButton>
            </Buttons>
          </Td>
        </Tr>
        <Tr>
          <Td>smartphone</Td>
          <Td>smartphone</Td>
          <Td>Sony</Td>
          <Td>Xperia X</Td>
          <Td>Faster and secure</Td>
          <Td>http://img</Td>
          <Td>http://e34453f324sdf</Td>
          <Td>
            <Buttons>
              <DeleteButton>
                <Delete size='20' fill="#e6e6e6"/>

              </DeleteButton>
              <EditButton>

                <Edit size='20' fill="#e6e6e6"/>
              </EditButton>
            </Buttons>
          </Td>
        </Tr>

      </Tbody>
    </Table1Container>
  )
}

export default Table