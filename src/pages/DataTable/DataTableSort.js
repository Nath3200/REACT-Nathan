import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: row => row.year,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

function DataTableSort() {
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};

export default DataTableSort
// a rajouter soit meme apres le copier coller du lien https://react-data-table-component.netlify.app/?path=/docs/getting-started-examples--page