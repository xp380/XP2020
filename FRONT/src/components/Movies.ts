import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import axios from "axios"

export default function Movies() {
    const [data, setData] = useState({ Search: [] });
// En utilisant useState, il faut que la valeur Search soit le même que la donnée de l'endpoint.

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://www.omdbapi.com/?s=man&apikey=cdb56670");
            setData(result.data);
        };
        fetchData();
    }, [data]);

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          filters: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Jim',
              value: 'Jim',
            },
            {
              text: 'Submenu',
              value: 'Submenu',
              children: [
                {
                  text: 'Green',
                  value: 'Green',
                },
                {
                  text: 'Black',
                  value: 'Black',
                },
              ],
            },
          ],
          // specify the condition of filtering result
          // here is that finding the name started with `value`
          onFilter: (value, record) => record.name.indexOf(value) === 0,
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ['descend'],
        },
        {
          title: 'Age',
          dataIndex: 'age',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          filters: [
            {
              text: 'London',
              value: 'London',
            },
            {
              text: 'New York',
              value: 'New York',
            },
          ],
          filterMultiple: false,
          onFilter: (value, record) => record.address.indexOf(value) === 0,
          sorter: (a, b) => a.address.length - b.address.length,
          sortDirections: ['descend', 'ascend'],
        },
      ];
      
      const lol = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '4',
          name: 'Jim Red',
          age: 32,
          address: 'London No. 2 Lake Park',
        },
      ];
      
      function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }

    return (
        <>
            {data.Search.map(item => (
                <ul>
                <li key={item.Title}>
                    <div>{item.Year}</div>
                    <div>{item.Title}</div>
                    <div>{item.imdbID}</div>
                    <div>{item.Type}</div>
                    <img width="200" height="200" alt={`the movie titled: ${item.Title}`} src={item.Poster}/>
                </li>
                </ul>
            ))}
            <Table columns={columns} dataSource={lol} onChange={onChange} />
        </>
    );
}