import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

Font.register({
  family: "Poppins-Bold",
  src: "/cover/static/Poppins-Bold.ttf",
},);
Font.register({
  family: "Poppins",
  src: "/cover/static/Poppins-Regular.ttf",
},);
const styles = StyleSheet.create({
  page: {
    padding: '30px',
    fontFamily: 'Times-Roman',
    backgroundColor: 'white',
  },
  body: {
    // paddingTop: '10px',
    border: '2px solid black',
    borderRadius: '5px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: "relative",
    padding: 0,
  },

  cse: {
    height: '70px',
    width: '70px',

  },
  vu: {
    height: '70px',
    width: '50px',
  },
  row: {
    flexDirection: "row",
    width: "100%"
  },
  col: {

    textAlign: "center",



  },
  bBottom: {
    borderBottom: "2px"
  },
  bRight: {
    borderRight: "2px",
  }


});

// Create Document Component
const IndexPage = ({ data }) => {

  function newLineAfterThreeWord(params) {
    let arrays = params.split(" ");
    let out = "";
    arrays.forEach((e, k) => {
      out += e + " ";
      if (k == 2) out += "\n";
    });

    return out;
  }
  //debug={true}
  // let header = ["S\nl.", "Experiment Name", "Page", "Issue Date", "Submission Date", "Remark"]
  let header = ["S\nl.", "Experiment Name"]
  if(data.page=="1")header.push("Page");
  if(data.issue=="1")header.push("Issue Date");
  if(data.submit=="1")header.push("Submission Date");
  if(data.remark=="1")header.push("Remark");


  const col = header.length, row = parseInt(data.row);
  let range = n => [...Array(n).keys()];
  const borderTable = (rk, ck) => {
    if (ck == (col - 1) && rk == (row - 1)) return {}; //last row, last collum
    else if (ck == (col - 1)) return styles.bBottom; //last collum
    else if (rk == (row - 1)) return styles.bRight; //last row
    else return { ...styles.bBottom, ...styles.bRight } //rest of the cells
  }

  const widther = (rk, ck) => {
    if (ck == 0) return { width: "200px", } //sl
    else if (ck == 1) return { width: "2000px" } //experiment name
    else if (rk == 0) return { width: "100%" } //rest of the header cells
    else return { width: "100%", padding: "10px", } //rest of the cells
  }

  return (
    <Document>
      <Page style={styles.page} >
        <View style={styles.body}>

          {
            data.identity == "1" &&
            <View style={{ width: "100%" }}>

              <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: "5px", marginVertical: '5px', padding: "2px", border: "2px solid black", borderRadius: "5px" }}>

                <View style={{ flex: 2 }}>

                  <View style={{ paddingLeft: '15px' }}>
                    <Text>Name: </Text>
                    <Text style={{ fontFamily: 'Times-Bold' }}>{data.name?data.name:" "}</Text>
                  </View>
                  <View style={{ paddingLeft: '15px' }}>
                    <Text>ID: </Text>
                    <Text style={{ fontFamily: 'Times-Bold' }}>{data.id?data.id:" "}</Text>
                  </View>

                </View>

                <View style={{ flex: 3 }}>
                  <View style={{}}>
                    <Text style={{}}>Course Title: </Text>
                    <Text style={{ fontFamily: 'Times-Bold', fontSize: "14px" }}>{data.ctitle?data.ctitle:" "}</Text>
                  </View>

                  <View style={{}}>
                    <Text >Course Code: </Text>
                    <Text style={{ fontFamily: 'Times-Bold' }}>{data.ccode?data.ccode:" "}</Text>
                  </View>


                </View>






              </View>
            </View>

          }

          <View style={{ flexDirection: "row", justifyContent: "center", width: "100%", marginVertical: "10px" }}>
            <Text style={{ textDecoration: "underline", fontFamily: 'Times-Bold', fontSize: "25px" }}>Index</Text>
          </View>

          <View style={{ border: "2px solid black", borderRadius: "5px", marginHorizontal: "5px", flexDirection: "column" }}>

            <View style={styles.row}>
              {header.map((v, k) => <Text key={k} style={[borderTable(0, k), widther(0, k), styles.col, { fontSize: "15px" }]}>{v}</Text>)}
            </View>

            {range(row).map((vr, kr) =>
              <View key={kr} style={styles.row}>
                {range(col).map((v, k) => <Text key={k} style={[borderTable(kr, k), widther(kr, k), styles.col]}>{"\n"}{"\n"}{"\n"}</Text>)}
              </View>)}




          </View>
        </View>

      </Page>
    </Document>
  )
}
  ;

export default IndexPage;