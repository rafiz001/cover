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
// Create styles
const styles = StyleSheet.create({
  page: {
    padding: '35px',
    fontFamily: 'Times-Roman'

  },
  body: {
    paddingTop: '10px',
    // border: '2px solid black',
    // borderRadius: '5px',
    height: '100%',
    fontFamily: "Poppins",
    fontSize: "15px"

  },

  header: {

    flexDirection: 'row',
    justifyContent: 'space-around',

    paddingBottom: '5px',
    borderBottom: '2px',
    borderStyle: 'solid',
    borderColor: 'black'
  },
  cse: {
    height: '70px',
    width: '70px',

  },
  vu: {
    height: '72px',
    width: '50px',
  },
  plain: {
    fontFamily: "Poppins"
  },
  bold: {
    fontFamily: "Poppins-Bold"
  },

});
let range = n => [...Array(n).keys()];
// Create Document Component
const Design3 = ({ data, assignment }) => (
  <Document>
    <Page style={styles.page} >
      <View style={styles.body}>

        <Text style={[styles.bold, { color: data.color ? "#C24C2E" : "black", fontSize: "33px", textAlign: "center" }]}>VARENDRA UNIVERSITY</Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image style={styles.vu} src={data.color ? "/cover/static/VU.png" : "/cover/static/VU_mono.png"} />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={[{ color: "white", backgroundColor: data.color ? "#C24C2E" : "grey", padding: "5px", marginVertical: "10px" }, styles.bold]}>{assignment ? "ASSIGNMENT" : "LAB REPORT"}</Text>
        </View>

        <View style={{ border: "2px solid black", padding: "3px", }}>
          {data.hasTitle && <View style={{ flexDirection: "row" }}>
            <Text style={[styles.bold]}>{assignment ? "Assignment" : "Report"} on: </Text>
            <Text style={{}}>{data.title}</Text>
          </View>}
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.bold]}>Course Title: </Text>
            <Text style={{}}>{data.ctitle}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.bold}>Course Code: </Text>
            <Text>{data.ccode}</Text>
          </View>
        </View>

        <View style={[styles.bold, { paddingHorizontal: "10px", paddingVertical: "30px", marginVertical: "30px", border: "2px solid black", position: "relative" }]}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 3 }}>Student Name</Text>
            <Text style={{ flex: 7 }}>: {data.sname}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 3 }}>Student ID</Text>
            <Text style={{ flex: 7 }}>: {data.sid}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 3 }}>Semester</Text>
            <Text style={{ flex: 7 }}>: {data.semester}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 3 }}>Section</Text>
            <Text style={{ flex: 7 }}>: {data.section}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 3 }}>Batch</Text>
            <Text style={{ flex: 7 }}>: {data.batch}</Text>
          </View>
          <View style={{ position: "absolute", top: "-17px", left: "0px", width: "100%", flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ paddingHorizontal: "10px", paddingVertical: "5px", backgroundColor: "grey", color: "white" }}>Prepaired By</Text>
          </View>
        </View>

        <View style={[styles.bold, { flexDirection: "row", justifyContent: "center", gap: "20px", marginVertical: "10px" }]}>

          <Text style={{ padding: "5px", border: "2px solid black" }}>{assignment ? "Assignment" : "Report"} No.: {data.report ? data.report : range(10).map(() => " ")}</Text>
          <Text style={{ padding: "5px", border: "2px solid black" }}>Submission Date: {data.submit ? data.submit : range(40).map(() => " ")}</Text>
        </View>



        <View style={[{ marginVertical: "30px", border: "2px solid black", position: "relative" }]}>
          <View style={{ flexDirection: "row", }}>
            <View style={{ flex: 1, }}>
              <Text style={[styles.bold, { textAlign: "center", marginTop: "60px", borderTop: "2px" }]}>{data.tname1}</Text>
              <Text style={{ textAlign: "center" }}>{data.tdes1}{"\n"}Dept. of {data.tdept}{"\n"}Varendra University</Text>
            </View>

            {data.tname2 && <View style={{ flex: 1, borderLeft: "2px", }}>
              <Text style={[styles.bold, { textAlign: "center", marginTop: "60px", borderTop: "2px" }]}>{data.tname2}</Text>
              <Text style={{ textAlign: "center" }}>{data.tdes2}{"\n"}Dept. of {data.tdept}{"\n"}Varendra University</Text>
            </View>}

          </View>


          <View style={{ position: "absolute", top: "-17px", left: "0px", width: "100%", flexDirection: "row", justifyContent: "center" }}>
            <Text style={[styles.bold, { paddingHorizontal: "10px", paddingVertical: "5px", backgroundColor: "grey", color: "white" }]}>Prepaired For</Text>
          </View>
        </View>


      </View>

    </Page>
  </Document>
);

export default Design3;