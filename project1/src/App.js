import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import {useRef} from "react";
import QuotationTable from "./QuotationTable";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useLocalStorage from 'react-localstorage-hook';

function App() {
  const itemRef = useRef();
  const ppuRef = useRef();
  const qtyRef = useRef();
  const disRef = useRef();

  const [dataItems, setDataItems] = useLocalStorage("dataItems",[]);

  const dummyProductList = [
    { id: "p000",name: "None" ,price: 0},
    { id: "p001", name: "Samsung LED TV 52", price: 15000 },
    { id: "p002", name: "Xiaomi Air Purifier", price: 4000 },
    { id: "p003", name: "Brother Laserjet Printer", price: 5500 },
    { id: "p004", name: "Bose Speaker", price: 20000 },
  ];


  const addItem = () => {
    if (qtyRef.current.value === "") {
      alert("Quantity cannot be empty")
      return;
    }

    if (qtyRef.current.value === "0") {
      alert("Quantity cannot be empty")
      return;
    }

    if (itemRef.current.value === "") {
      alert("Item name is empty");
      return;
    }
    if (parseFloat(disRef.current.value) > parseFloat(ppuRef.current.value)) {
      alert("Discount rate cannot be more than price");
      return;
    }

    if (disRef.current.value === "") {
      disRef.current.value = 0
    }

    const pid = itemRef.current.value;
    const product = dummyProductList.find(e => e.id === pid);

    if (product.name === "None") {
      alert("Please add a valid item!");
      return;
    }

    if (Object.keys(dataItems).length > 0) {
      for (var key in dataItems) {
        if (product.name === dataItems[key].item) {
        
          //dataItems[key].ppu = parseFloat(ppuRef.current.value) + parseFloat(dataItems[key].ppu)
          dataItems[key].qty =  parseFloat(qtyRef.current.value) + parseFloat(dataItems[key].qty)
          dataItems[key].dis = parseFloat(disRef.current.value) + parseFloat(dataItems[key].dis)
          setDataItems([...dataItems]);
          return;
        }
      }
    }
      
    var itemObj = {
      item: product.name,
      ppu: ppuRef.current.value,
      qty: qtyRef.current.value,
      dis: disRef.current.value,
    };

    dataItems.push(itemObj);
    setDataItems([...dataItems]);
    console.log(dataItems[1].item);
    console.log(itemRef.current.value);
    console.log(dataItems);
    // setDataItems(dataItems)

  };

  const productChange = (e) => {
    const pid = itemRef.current.value;
    const product = dummyProductList.find((e) => e.id === pid);
    ppuRef.current.value = product.price
    
  }
  
  const options = dummyProductList.map(v => {
    return <option value={v.id}>{v.name}</option>
  })

  return (
    
    <>
    <div className="App-header">
      <h1><img src={logo} alt="logo" height={50}/> Midterm-6118156 </h1>
    </div>
    <Container>
        <Row>
          <Col xs={4} style={{ backgroundColor: '#B53737' }}>
            <Form>
              <Form.Group className="mb-3" controlId="formItem">
                <Form.Label>Item</Form.Label>
                <Form.Select

                  aria-label="Default select example"
                  ref={itemRef}
                  onChange={productChange}
                >
                  {options}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                disabled={true}
                  type="number"
                  placeholder="Price Per Unit"
                  ref={ppuRef} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formQauntity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control min="0" type="number" placeholder="Quantity" ref={qtyRef} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDiscount">
                <Form.Label>Discount</Form.Label>
                <Form.Control min="0" type="number" placeholder="Discount" ref={disRef} />
              </Form.Group>

              <Button variant="dark" onClick={addItem} margin>
                Add
              </Button>
            </Form>
          </Col>
          <Col>
            <QuotationTable data={dataItems} setDataItems={setDataItems} />
          </Col>
        </Row>
      </Container></>
  );
    
}

export default App;