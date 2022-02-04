import { useState, useEffect } from "react";
import { Container, Row, Col,Table, Button } from "react-bootstrap";
import { FaTrash } from 'react-icons/fa';
const styles = {
    textCenter: { textAlign: "center" },
    textRight: { textAlign: "right" },
  };

function QuotationTable({ data, setDataItems }) {
  const [dataRows, setDataRows] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  
  
  useEffect(() => {
    let sum = 0;
    let sum1 = 0;
    let total = 0;
    let count = 0;

    

    const z = data.map((v, i) => {

      var str = v.dis;
      var count = (str.match(/\,/g) || []).length;
      let amount = v.num/(count+1);

      if (data.length > 0) {
            var str1 = v.dis;
            var count1 = (str1.match(/\,/g) || []).length;
            console.log(v.num+ " "+ count1);
             sum =(parseFloat(v.num))/(count1+1);
             console.log("sum "+sum);
             console.log("sum1 "+sum1);
             sum1 = sum1+ sum;
             console.log("sum1 "+sum1);
             console.log("asfasd" + v.num);
      }
      
        
      if (v.num.toString().length > 4) {
        amount = amount.toFixed(2);
      }
      console.log(data.length)
      console.log("sum1 "+sum1);
      total = sum1/(data.length)
      console.log(total)
      // <td style={styles.textRight}>{v.dis}</td>
      //  <th style={styles.textRight}>{Math.round(totalDiscount * 10) / 10}</th>
      return (
        <tr key={i}>
            <td><FaTrash onClick={() => deleteClick(i)}/></td>
            <td>{v.qty}</td>
            <td style={styles.textCenter}>{v.item}</td>
            <td style={styles.textRight}>{v.ppu}</td>
            <td style={styles.textRight}>{numberWithCommas(v.dis)}</td>
            <td style={styles.textRight}>{amount}</td>
        </tr>
      );
    });

    setDataRows(z);
    setTotalPrice(total);
   
  }, [data]);

  const deleteClick = (i) => {
    data.splice(i,1)
    setDataItems([...data])
  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const clearTable = () => {
    setDataItems([]);
    setDataRows([]);
  };

  return (
    <Container>
    <Row>
      <Col>
        <h1>Quotation Table</h1>
      </Col>
      <Col style={styles.textRight}>
        <Button onClick={clearTable} variant="secondary">
          Clear
        </Button>
      </Col>
    </Row>
    <Table striped bordered hover>
      <thead style={{backgroundColor:'#104a8e'}}>
        <tr>
          <th></th>
          <th>Semester</th>
          <th>Code</th>
          <th>Subjects</th>
          <th>Grade</th>
          <th>Sem GPA</th>
    
        </tr>
      </thead>
      <tbody>{dataRows}</tbody>
      <tfoot>
          <tr>
            <th colSpan={4}></th>
            <th style={styles.textCenter}>Your GPA</th>
            <th style={styles.textRight}>{numberWithCommas(totalPrice.toFixed(2))}</th>
          </tr>
        
      </tfoot>
    </Table>
  </Container>
  );
}

export default QuotationTable;
