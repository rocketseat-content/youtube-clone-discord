import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 24px 0 13px 12px;
  background-color: var(--secondary);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
    display: none;
  }

  &:hover {
    ::-webkit-scrollbar {
      display: block;
    }
  }

  ::-webkit-scrollbar-thumb {
    width: 1px;
    background-color: var(--tertiary);
    border-radius: 8px;
    background-clip: content-box;
    border: 2px solid transparent;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 208px;
  margin-bottom: 6px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;

  color: var(--symbol);
  cursor: pointer;
`;
