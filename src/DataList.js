import React, {useState, useEffect} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import ToolkitProvider, { CSVExport } from "react-bootstrap-table2-toolkit";

function DataList(){

    const [events, setEventsArray] = useState([]);



    const columns = [
        {dataField:'id', text: 'Id'},
        {dataField:'sap_code', text: 'Product Code', sort: true, filter: textFilter()},
        {dataField:'operation', text: 'Operation', sort: true},
        {dataField:'start_time', text: 'Start Time'},
        {dataField:'end_time', text: 'End Time'}
    ]

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '>',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
    });

    useEffect(() => {
      fetch(`http://login2.nahpc2.arm.com:7800/iris/api/events`)
        .then((response) => response.json())
        .then((jsonData) => 
        {
  
          console.log(`jsonData type:: ` + typeof(jsonData));
          console.log(`jsonData:: ` + jsonData);
          var obj = JSON.parse(jsonData);
          setEventsArray(obj);
          console.log(`event_type`)
          console.log(typeof(events));
          console.log(events);
        });
    }, []);

    const { ExportCSVButton } = CSVExport;



    return 
<div>
<ToolkitProvider
  keyField="id"
  data={ events }
  columns={ columns }
  exportCSV
>
  {
    props => (
      <div>
        <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
        <hr />
        <BootstrapTable
          { ...props.baseProps }
        />
      </div>
    )
  }
</ToolkitProvider>
</div>   

}

export default DataList;