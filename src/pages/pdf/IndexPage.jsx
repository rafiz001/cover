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
    width: "100%",
    textAlign: "center",
    padding: "10px",
    border: "2px solid black",
    
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
  return (
    <Document>
      <Page style={styles.page} >
        <View style={styles.body}>

          <View style={{ width: "100%" }}>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: "5px", marginVertical: '5px', padding: "2px", border: "2px solid black", borderRadius: "5px" }}>

              <View style={{ flex: 2 }}>

                <View style={{ paddingLeft: '15px' }}>
                  <Text>Name: </Text>
                  <Text style={{ fontFamily: 'Times-Bold' }}>Md. Rafiz Uddin</Text>
                </View>
                <View style={{ paddingLeft: '15px' }}>
                  <Text>ID: </Text>
                  <Text style={{ fontFamily: 'Times-Bold' }}>222311079</Text>
                </View>

              </View>

              <View style={{ flex: 3 }}>
                <View style={{}}>
                  <Text style={{}}>Course Title: </Text>
                  <Text style={{ fontFamily: 'Times-Bold', fontSize: "14px" }}>Operating System and System Programming Lab</Text>
                </View>

                <View style={{}}>
                  <Text >Course Code: </Text>
                  <Text style={{ fontFamily: 'Times-Bold' }}>CSE 332</Text>
                </View>


              </View>






            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "center", width: "100%", marginVertical: "10px" }}>
            <Text style={{ textDecoration: "underline", fontFamily: 'Times-Bold', fontSize: "25px" }}>Index</Text>
          </View>

          <View style={{ border: "2px solid black", marginHorizontal: "5px", flexDirection: "column" }}>
            <View style={styles.row}>
              <Text style={styles.col}>1</Text>
              <Text style={styles.col}>2</Text>
              <Text style={styles.col}>3</Text>
              <Text style={styles.col}>4</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.col}>1</Text>
              <Text style={styles.col}>2</Text>
              <Text style={styles.col}>3</Text>
              <Text style={styles.col}>4</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.col}>1</Text>
              <Text style={styles.col}>2</Text>
              <Text style={styles.col}>3</Text>
              <Text style={styles.col}>4</Text>
            </View>


          </View>
        </View>

      </Page>
    </Document>
  )
}
  ;

export default IndexPage;