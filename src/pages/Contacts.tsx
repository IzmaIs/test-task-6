import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Contact} from "../types/typesForContacts";
import {onInputHandler} from "../helpers/onInputHandler";

type SaveChanges = (id: number) => any

const Contacts: FC = () => {

    const [selectedId, setSelectedId] = useState<number | null>(null)
    const [createContact, setCreateContact] = useState<Contact>({
        id: Math.random(),
        FIO: "",
        phone: undefined
    })
    const [allContacts, setAllContacts] = useState<Array<Contact>>([])
    const [value, setValue] = useState<Contact>({
        id: 0,
        FIO: "",
        phone: undefined
    })
    const [searchParam, setSearchParam] = useState<string>('')

    const createContacts = () => {
        (createContact.FIO || createContact.phone) &&
            setAllContacts((prevState) => [...prevState, createContact])
            setCreateContact({
                id: Math.random(),
                FIO: "",
                phone: undefined
            })
    }

    const saveChanges: SaveChanges = (id:number) => {
        let newArr = [...allContacts].map(item => {
            if (item.id === id) {
                item.id = id
                item.FIO = value.FIO
                item.phone = value.phone
            }
            return item
        })
        setAllContacts(newArr)
        setSelectedId(null)
    }

    const searcher = (searchParam: string | number | undefined) => {
        if (searchParam) {
            return allContacts.filter(item => (item.FIO.startsWith?.(searchParam as string)) || (item?.phone?.startsWith?.(searchParam as string)))
        } else {
            return allContacts
        }
    }

    return (
        <div className='contacts'>
            <div className='contacts__create-contact'>
                <div>
                    <p>ФИО: </p>
                    <input
                        type='text'
                        name='FIO'
                        value={createContact.FIO}
                        onChange={(e) => onInputHandler(e, setCreateContact)}
                    />
                </div>
                <div>
                    <p>Номер телефона: </p>
                    <input
                        type='phone'
                        name='phone'
                        value={createContact.phone || ''}
                        onChange={e => onInputHandler(e, setCreateContact)}
                    />
                </div>
                <br/>
                <button
                    onClick={() => {
                        createContacts()
                    }}
                >
                    Добавить контакт
                </button>
            </div>
            <div className='contacts__block-info'>
                <div>
                    <p>Поиск:</p>
                    <input
                        name='search'
                        type='text'
                        value={searchParam}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchParam(e.target.value)}
                    />
                </div>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>ФИО</th>
                            <th>Номер телефона</th>
                        </tr>
                        </thead>
                        <tbody>
                        {searcher(searchParam).map((item:Contact) => (
                            <tr key={item?.id}>
                                {(selectedId === item?.id)
                                    ?
                                    <td>
                                        <input
                                            type='text'
                                            name='FIO'
                                            value={value.FIO}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => onInputHandler(e, setValue)}
                                        />
                                    </td>
                                    :
                                    <td>{item?.FIO}</td>
                                }
                                {(selectedId === item?.id)
                                    ?
                                    <td>
                                        <input
                                            type='phone'
                                            name='phone'
                                            value={value.phone}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => onInputHandler(e, setValue)}
                                        />
                                    </td>
                                    :
                                    <td>{item?.phone}</td>
                                }

                                <td>
                                    <button
                                        onClick={() => {
                                            setAllContacts(allContacts.filter(j => j !== item))
                                        }}
                                    >
                                        Удалить
                                    </button>
                                </td>
                                <td>
                                    {(selectedId === item?.id)
                                        ?
                                        <button
                                            onClick={() => {
                                                saveChanges(item?.id)
                                            }}
                                        >
                                            Сохранить
                                        </button>
                                        :
                                        <button
                                            onClick={() => {
                                                setSelectedId(item.id)
                                                setValue({FIO: item.FIO, phone: item.phone, id: item.id})
                                            }}
                                        >
                                            Редактировать
                                        </button>
                                    }
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Contacts;