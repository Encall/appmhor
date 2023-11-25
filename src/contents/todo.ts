export interface TodoType {
  label: string
  status: boolean
  //   date: Date
  drug: DrugType[]
}

export interface DrugType {
  label: string
  detail: string
  unit: number
}

export const Todos: TodoType[] = [
  {
    label: 'แดกยายัง',
    status: false,
    // date: ,
    drug: [
      {
        label: 'ยาปลอม',
        detail: 'อย่าลืมกินนมตาม',
        unit: 5,
      },
      {
        label: 'ยาปลอม',
        detail: 'อย่าลืมกินนมตาม',
        unit: 5,
      },
    ],
  },
  {
    label: 'กินข้าวยังไอ้เหี้ย',
    status: false,
    // date: ,
    drug: [
      {
        label: 'ยาปลอม',
        detail: 'อย่าลืมกินนมตาม',
        unit: 5,
      },
    ],
  },
  {
    label: 'นอนยังมึงอะ',
    status: false,
    // date: ,
    drug: [
      {
        label: 'ยาปลอม',
        detail: 'อย่าลืมกินนมตาม',
        unit: 5,
      },
    ],
  },
]
