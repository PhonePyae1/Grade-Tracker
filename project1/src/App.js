import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import {useRef} from "react";
import QuotationTable from "./QuotationTable";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useLocalStorage from 'react-localstorage-hook';
import jasona from './cs-2019';


function App() {
  const itemRef = useRef();
  const ppuRef = useRef();
  const qtyRef = useRef();
  const disRef = useRef();
  const numRef = useRef();


  const [dataItems, setDataItems] = useLocalStorage("dataItems",[]);

  const dummyProductList = [
    { id: "p000",name: jasona.curriculum.subjects[0].subjects[0].code ,price: jasona.curriculum.subjects[0].subjects[0].name},
    { id: "p001",name: jasona.curriculum.subjects[0].subjects[1].code ,price: jasona.curriculum.subjects[0].subjects[1].name},
    { id: "p002",name: jasona.curriculum.subjects[0].subjects[2].code ,price: jasona.curriculum.subjects[0].subjects[2].name},
    { id: "p003",name: jasona.curriculum.subjects[0].subjects[3].code ,price: jasona.curriculum.subjects[0].subjects[3].name},
    { id: "p004",name: jasona.curriculum.subjects[1].subjects[0].code ,price: jasona.curriculum.subjects[1].subjects[0].name},
    { id: "p005",name: jasona.curriculum.subjects[2].subjects[0].code ,price: jasona.curriculum.subjects[2].subjects[0].name},
    { id: "p006",name: jasona.curriculum.subjects[2].subjects[1].code ,price: jasona.curriculum.subjects[2].subjects[1].name},
    { id: "p007",name: jasona.curriculum.subjects[3].subjects[0].code ,price: jasona.curriculum.subjects[3].subjects[0].name},
    { id: "p008",name: jasona.curriculum.subjects[3].subjects[1].code ,price: jasona.curriculum.subjects[3].subjects[1].name},
    { id: "p009",name: jasona.curriculum.subjects[4].subjects[0].code ,price: jasona.curriculum.subjects[4].subjects[0].name},
    { id: "p010",name: jasona.curriculum.subjects[4].subjects[1].code ,price: jasona.curriculum.subjects[4].subjects[1].name},
    { id: "p011",name: jasona.curriculum.subjects[4].subjects[2].code ,price: jasona.curriculum.subjects[4].subjects[2].name},
    { id: "p012",name: jasona.curriculum.subjects[4].subjects[3].code ,price: jasona.curriculum.subjects[4].subjects[3].name},
    { id: "p013",name: jasona.curriculum.subjects[4].subjects[4].code ,price: jasona.curriculum.subjects[4].subjects[4].name},
    { id: "p014",name: jasona.curriculum.subjects[4].subjects[5].code ,price: jasona.curriculum.subjects[4].subjects[5].name},
    { id: "p015",name: jasona.curriculum.subjects[4].subjects[6].code ,price: jasona.curriculum.subjects[4].subjects[6].name},
    { id: "p016",name: jasona.curriculum.subjects[4].subjects[7].code ,price: jasona.curriculum.subjects[4].subjects[7].name},
    { id: "p017",name: jasona.curriculum.subjects[4].subjects[8].code ,price: jasona.curriculum.subjects[4].subjects[8].name},
    { id: "p018",name: jasona.curriculum.subjects[4].subjects[9].code ,price: jasona.curriculum.subjects[4].subjects[9].name},
    { id: "p019",name: jasona.curriculum.subjects[4].subjects[10].code ,price: jasona.curriculum.subjects[4].subjects[10].name},
    { id: "p020",name: jasona.curriculum.subjects[4].subjects[11].code ,price: jasona.curriculum.subjects[4].subjects[11].name},
    { id: "p021",name: jasona.curriculum.subjects[4].subjects[12].code ,price: jasona.curriculum.subjects[4].subjects[12].name},
    { id: "p022",name: jasona.curriculum.subjects[4].subjects[13].code ,price: jasona.curriculum.subjects[4].subjects[13].name},
    { id: "p023",name: jasona.curriculum.subjects[4].subjects[14].code ,price: jasona.curriculum.subjects[4].subjects[14].name},
    { id: "p024",name: jasona.curriculum.subjects[4].subjects[15].code ,price: jasona.curriculum.subjects[4].subjects[15].name},
    { id: "p025",name: jasona.curriculum.subjects[4].subjects[16].code ,price: jasona.curriculum.subjects[4].subjects[16].name},
    { id: "p026",name: jasona.curriculum.subjects[4].subjects[17].code ,price: jasona.curriculum.subjects[4].subjects[17].name},
    { id: "p027",name: jasona.curriculum.subjects[4].subjects[18].code ,price: jasona.curriculum.subjects[4].subjects[18].name},
    { id: "p028",name: jasona.curriculum.subjects[4].subjects[19].code ,price: jasona.curriculum.subjects[4].subjects[19].name},
    { id: "p029",name: jasona.curriculum.subjects[4].subjects[20].code ,price: jasona.curriculum.subjects[4].subjects[20].name},
    { id: "p030",name: jasona.curriculum.subjects[4].subjects[21].code ,price: jasona.curriculum.subjects[4].subjects[21].name},
    { id: "p031",name: jasona.curriculum.subjects[4].subjects[22].code ,price: jasona.curriculum.subjects[4].subjects[22].name},
    { id: "p032",name: jasona.curriculum.subjects[4].subjects[23].code ,price: jasona.curriculum.subjects[4].subjects[23].name},
    { id: "p033",name: jasona.curriculum.subjects[4].subjects[24].code ,price: jasona.curriculum.subjects[4].subjects[24].name},
    { id: "p034",name: jasona.curriculum.subjects[4].subjects[25].code ,price: jasona.curriculum.subjects[4].subjects[25].name},
    { id: "p035",name: jasona.curriculum.subjects[4].subjects[26].code ,price: jasona.curriculum.subjects[4].subjects[26].name},
    { id: "p036",name: jasona.curriculum.subjects[4].subjects[27].code ,price: jasona.curriculum.subjects[4].subjects[27].name},
    { id: "p037",name: jasona.curriculum.subjects[4].subjects[28].code ,price: jasona.curriculum.subjects[4].subjects[28].name},


  ];

  const gradeList = [ 
    {id:1, grade: "A"},
    {id:2,grade: "A-"},
    {id:3,grade: "B+"},
    {id:4,grade: "B"},
    {id:5,grade: "B-"},
    {id:6,grade: "C+"},
    {id:7,grade: "C"},
    {id:8,grade: "C-"},
    {id:9,grade: "D"},
    {id:10,grade: "F"},
    {id:11,grade: "Else"},
  ];

  const gpaList = [ 
    {id:"A",grade1: 4},
    {id:"A-",grade1: 3.75},
    {id:"B+",grade1: 3.25},
    {id:"B",grade1: 3},
    {id:"B-",grade1: 2.75},
    {id:"C+",grade1: 2.5},
    {id:"C",grade1: 2},
    {id:"C-",grade1: 1.75},
    {id:"D",grade1: 1.5},
    {id:"F",grade1: 0},
  ];

  const addItem = () => {

    console.log(dataItems.length)
    if (itemRef.current.value === "") {
      alert("Item name is empty");
      return;
    }
    if (parseFloat(disRef.current.value) > parseFloat(ppuRef.current.value)) {
      alert("Discount rate cannot be more than price");
      return;
    }

    const pid = itemRef.current.value;
    const product = dummyProductList.find(e => e.id === pid);

    if (product.name === "None") {
      alert("Please add a valid item!");
      return;
    }
  
  
    if (Object.keys(dataItems).length > 0) {
     // console.log(dataItems[0].item.includes(product.name));
     // console.log(dataItems[0].item);

      
      for (var key in dataItems) {
        var string = product.name
        var str1 = dataItems[key].item
        if (str1.includes(string)) {
          alert("Cannot add the same course !!! ");
          return;
        }
        

        if (qtyRef.current.value === dataItems[key].qty) {
        
          dataItems[key].item = dataItems[key].item +" , "+  product.name
          dataItems[key].ppu = dataItems[key].ppu +" , "+  ppuRef.current.value
          dataItems[key].dis = dataItems[key].dis +" , "+  disRef.current.value
          var str = dataItems[key].dis;
          var count = (str.match(/\,/g) || []).length;
          console.log(","+ count)
          console.log(dataItems[key].num);
          console.log(numRef.current.value);
          dataItems[key].num = (parseFloat(dataItems[key].num) + parseFloat(numRef.current.value)).toFixed(2); 
          console.log(dataItems[key].num);
          setDataItems([...dataItems])
          return;
        }
      }
    }
      
    var itemObj = {
      qty: qtyRef.current.value,
      item: product.name,
      ppu: ppuRef.current.value,
      dis: disRef.current.value,
      num: numRef.current.value
    };

    dataItems.push(itemObj);
    setDataItems([...dataItems]);
    //console.log(itemRef.current.value);
    //console.log(dataItems);
    //console.log("numRef" + numRef)
    // setDataItems(dataItems)
  
  };



  const productChange = (e) => {
    console.log(disRef.current.value)
    const pid = itemRef.current.value;
    const product = dummyProductList.find((e) => e.id === pid);
    ppuRef.current.value = product.price
  }
  
  const PproductChange = (e) => {
    console.log(disRef.current.value);
    const pidd = disRef.current.value;
    const product1 = gpaList.find((e) => e.id === pidd);
    console.log(product1.grade1)
    numRef.current.value = product1.grade1
  }
  
  const options = dummyProductList.map(v => {
    return <option value={v.id}>{v.name}</option>
  })

  const options1 = gradeList.map(v => {
    return <option>{v.grade}</option>
  })



  return (
    
    <>
    <div className="App-header">
      <h1> GradeTracker </h1>
    </div>
    <Container>
        <Row>
          <Col xs={4} style={{ backgroundColor: '#104a8e' }}>
            <Form>

            <Form.Group className="mb-3" controlId="formQauntity">
                <Form.Label>Semester</Form.Label>
                <Form.Control min="0"  placeholder="1 or 2" ref={qtyRef}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formItem">
                <Form.Label>Code</Form.Label>
                <Form.Select

                  aria-label="Default select example"
                  ref={itemRef}
                  onChange={productChange}
                >
                  {options}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formQauntity">
                <Form.Label>Subjects</Form.Label>
                <Form.Control disabled= "true" min="0"  placeholder="Subjects" ref={ppuRef}  onChange={productChange}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDiscount">
                <Form.Label>Grade</Form.Label>
                <Form.Select

                  aria-label="Default select example"
                  ref={disRef}
                  onChange={PproductChange}
                >
                  {options1}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGPA">
                <Form.Label>GPA</Form.Label>
                <Form.Control disabled= "true" min="0"  placeholder="GPA" ref={numRef}  onChange={PproductChange}/>
              </Form.Group>

              <Button variant="secondary" onClick={addItem} margin>
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