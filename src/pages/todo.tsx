import { Box, Button, Checkbox, Modal, Stack } from '@mui/material'
import { DrugType, Todos, TodoType } from '../contents/todo'
import { useState } from 'react'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: '16px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const TodoPage: React.FC = () => {
  const [data, setData] = useState<TodoType[]>(Todos)
  const [dataSel, setDataSel] = useState<number>(0)
  const [modal, setModal] = useState<boolean>(false)
  return (
    <>
      <Modal
        open={modal}
        onClose={() => {
          setModal(false)
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {data[dataSel].drug.map((drug: DrugType, index: number) => {
            return (
              <Box key={index}>
                <Stack direction="row" spacing={2}>
                  <Box width="45%" sx={{ textAlign: 'center' }}>
                    {drug.label}
                  </Box>
                  <Box width="45%" sx={{ textAlign: 'center' }}>
                    {drug.unit} Tab
                  </Box>
                </Stack>
                <Box width="100%" sx={{ marginX: '16px' }}>
                  {drug.detail}
                </Box>
              </Box>
            )
          })}
          <Box width="100%" sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <span>
              <Checkbox
                checked={data[dataSel].status}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  console.log()
                  let newArr = [...data]
                  newArr[dataSel].status = e.target.checked
                  setData(newArr)
                }}
              />
              Doing
            </span>
          </Box>
        </Box>
      </Modal>
      {/* <Pagination color="primary" count={10} /> */}
      <TodoComponent data={data} setData={setData} setSelect={setDataSel} setModal={setModal} />
    </>
  )
}

const TodoComponent = ({
  data,
  setData,
  setSelect,
  setModal,
}: {
  data: TodoType[]
  setData: React.Dispatch<React.SetStateAction<TodoType[]>>
  setSelect: React.Dispatch<React.SetStateAction<number>>
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Stack sx={{ display: 'inline-flex', gap: '8px' }}>
      {data.map((todo: TodoType, index: number) => {
        return (
          <Button
            key={index}
            onClick={() => {
              setSelect(index)
              setModal(true)
            }}
          >
            <Box
              display="inline-block"
              sx={{ border: 1, borderRadius: '16px', paddingX: '8px' }}
              key={index + todo.label}
            >
              {todo.label}
            </Box>
          </Button>
        )
      })}
    </Stack>
  )
}
