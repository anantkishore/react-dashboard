import React, {useState, useEffect} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

function DataList(){

    const [events, setEventsArray] = useState([{
      "id": 1,
      "sap_code": "SQ30LE000",
      "operation": "upload",
      "start_time": "2022/12/05 18:35:20",
      "end_time": "2022/12/05 18:35:22"
    }, {
      "id": 2,
      "sap_code": "SQ30LE001",
      "operation": "upload",
      "start_time": "2022/12/06 18:15:02",
      "end_time": "2022/12/06 18:17:13"
    }, {
      "id": 3,
      "sap_code": "WP30MH062",
      "operation": "upload",
      "start_time": "06/12/2022 19:52:33",
      "end_time": "06/12/2022 19:52:33"
    }, {
      "id": 4,
      "sap_code": "WP30MH062",
      "operation": "certify",
      "start_time": "Tue, 06 Dec 2022 19:52:35 +0000",
      "end_time": "Tue, 06 Dec 2022 19:52:38 +0000"
    }, {
      "id": 5,
      "sap_code": "KL83CD003",
      "operation": "certify",
      "start_time": "Wed, 07 Dec 2022 05:44:13 +0000",
      "end_time": "Wed, 07 Dec 2022 05:44:34 +0000"
    }, {
      "id": 6,
      "sap_code": "SQ30LB006",
      "operation": "upload",
      "start_time": "2022/12/07 10:37:17",
      "end_time": "2022/12/07 10:39:16"
    }, {
      "id": 7,
      "sap_code": "SQ30LE001",
      "operation": "upload",
      "start_time": "2022/12/07 10:41:16",
      "end_time": "2022/12/07 10:41:44"
    }, {
      "id": 8,
      "sap_code": "SQ30LE000",
      "operation": "certifyparts",
      "start_time": "2022/12/07 10:49:27",
      "end_time": "2022/12/07 10:50:19"
    }, {
      "id": 9,
      "sap_code": "SQ30LS000",
      "operation": "certifyparts",
      "start_time": "2022/12/07 10:51:13",
      "end_time": "2022/12/07 10:51:57"
    }, {
      "id": 10,
      "sap_code": "SQ30LS001",
      "operation": "certifyparts",
      "start_time": "2022/12/07 10:52:47",
      "end_time": "2022/12/07 10:53:31"
    }, {
      "id": 11,
      "sap_code": "SQ30LB005",
      "operation": "certifyparts",
      "start_time": "2022/12/07 10:54:21",
      "end_time": "2022/12/07 10:55:03"
    }, {
      "id": 12,
      "sap_code": "SQ30LH000",
      "operation": "certifyparts",
      "start_time": "2022/12/07 10:55:54",
      "end_time": "2022/12/07 10:56:40"
    }, {
      "id": 13,
      "sap_code": "SQ30LH002",
      "operation": "certifyparts",
      "start_time": "2022/12/07 10:57:29",
      "end_time": "2022/12/07 10:58:11"
    }, {
      "id": 14,
      "sap_code": "SQ30LH003",
      "operation": "certifyparts",
      "start_time": "2022/12/07 10:59:02",
      "end_time": "2022/12/07 10:59:45"
    }, {
      "id": 15,
      "sap_code": "SQ30LB007",
      "operation": "certifyparts",
      "start_time": "2022/12/07 11:00:34",
      "end_time": "2022/12/07 11:01:19"
    }, {
      "id": 16,
      "sap_code": "SQ30LE001",
      "operation": "certifyparts",
      "start_time": "2022/12/07 11:02:09",
      "end_time": "2022/12/07 11:03:03"
    }, {
      "id": 17,
      "sap_code": "SQ30LS005",
      "operation": "certifyparts",
      "start_time": "2022/12/07 11:03:54",
      "end_time": "2022/12/07 11:04:38"
    }, {
      "id": 18,
      "sap_code": "SQ30LS006",
      "operation": "certifyparts",
      "start_time": "2022/12/07 11:05:36",
      "end_time": "2022/12/07 11:06:26"
    }, {
      "id": 19,
      "sap_code": "SQ30LB009",
      "operation": "certifyparts",
      "start_time": "2022/12/07 11:07:18",
      "end_time": "2022/12/07 11:08:02"
    }, {
      "id": 20,
      "sap_code": "SQ30LS008",
      "operation": "certifyparts",
      "start_time": "2022/12/07 11:09:01",
      "end_time": "2022/12/07 11:09:46"
    }, {
      "id": 21,
      "sap_code": "SQ30LH007",
      "operation": "certifyparts",
      "start_time": "2022/12/07 11:10:44",
      "end_time": "2022/12/07 11:11:33"
    }, {
      "id": 22,
      "sap_code": "MR33LE003",
      "operation": "upload",
      "start_time": "07/12/2022 11:12:30",
      "end_time": "07/12/2022 11:12:30"
    }, {
      "id": 23,
      "sap_code": "MR33LE003",
      "operation": "certify",
      "start_time": "Wed, 07 Dec 2022 11:12:32 +0000",
      "end_time": "Wed, 07 Dec 2022 11:12:51 +0000"
    }, {
      "id": 24,
      "sap_code": "SQ30LH006",
      "operation": "certifyparts",
      "start_time": "2022/12/07 11:13:12",
      "end_time": "2022/12/07 11:13:55"
    }, {
      "id": 25,
      "sap_code": "MR33LP010",
      "operation": "certify",
      "start_time": "Wed, 07 Dec 2022 11:14:02 +0000",
      "end_time": "Wed, 07 Dec 2022 11:14:24 +0000"
    }, {
      "id": 26,
      "sap_code": "MR33LP032",
      "operation": "upload",
      "start_time": "07/12/2022 11:15:34",
      "end_time": "07/12/2022 11:15:34"
    }]);



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
      fetch(`http://google.com/api/events`)
        .then((response) => response.json())
        .then((jsonData) => 
        {
  
          console.log(`jsonData type:: ` + typeof(jsonData));
          console.log(`jsonData:: ` + jsonData);
          var obj = JSON.parse(jsonData);
          /*setEventsArray(obj);*/
          console.log(`event_type`)
          console.log(typeof(events));
          console.log(events);
        });
    }, []);

    


 
    return <div>
    <BootstrapTable 
    bootstrap4 
    keyField="id" 
    columns={columns} 
    data={events}
    pagination={pagination}
    filter={filterFactory()} />
</div>


}

export default DataList;