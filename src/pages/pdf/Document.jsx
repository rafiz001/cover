import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: '30px',
    fontFamily: 'Times-Roman'

  },
  body: {
    paddingTop: '10px',
    border: '2px solid black',
    borderRadius: '5px',
    height: '100%',


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
    height: '70px',
    width: '50px',
  }
});

// Create Document Component
const MyDocument = ({ data, assignment }) => (
  <Document>
    <Page style={styles.page} >
      <View style={styles.body}>

        <View style={styles.header}>


          <Image style={styles.cse} src={data.color ? "/cover/static/CSE.png" : "/cover/static/CSE_mono.png"} />

          <View >
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ fontSize: '40px' }}>Varendra University</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ fontSize: '12px', }}>Department of Computer Science and Engineering</Text>
            </View>

          </View>

          <Image style={styles.vu} src={data.color ? "/cover/static/VU.png" : "/cover/static/VU_mono.png"} />

        </View>

        <View style={{ marginVertical: "30px", textAlign: 'center', flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ border: '2px solid black', borderRadius: '25px', padding: '10px' }}>{assignment ? "Assignment" : "Lab Report"}: #{data.report}</Text>
        </View>

        {data.willIssue ? <>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: "5px", marginVertical: '50px', padding: "2px", border: "2px solid black", borderRadius: "5px" }}>

            <View style={{ flex: 3 }}>
              <View style={{ paddingLeft: '15px' }}>
                <Text style={{ marginTop: "10px" }}>Course Title: </Text>
                <Text style={{ fontFamily: 'Times-Bold' }}>{data.ctitle}</Text>
              </View>

              <View style={{ paddingLeft: '15px' }}>
                <Text >Course Code: </Text>
                <Text style={{ fontFamily: 'Times-Bold' }}>{data.ccode}</Text>
              </View>


            </View>

            <View style={{ flex: 2 }}>

              <View style={{}}>
                <Text>Issue Date: </Text>
                <Text style={{ fontFamily: 'Times-Bold' }}>{data.issue}</Text>
              </View>
              <View style={{ marginTop: "10px" }}>
                <Text>Submission Date: </Text>
                <Text style={{ fontFamily: 'Times-Bold' }}>{data.submit}</Text>
              </View>

            </View>


          </View>
        </> : <>
          <View style={{ flexDirection: 'column', gap: "7px", marginHorizontal: "5px", marginVertical: '50px', padding: "2px", border: "2px solid black", borderRadius: "5px" }}>

            <View style={{ display: "flex", flexDirection: "row", paddingLeft: '15px' }}>
              <Text style={{}}>Course Title: </Text>
              <Text style={{ fontFamily: 'Times-Bold' }}>{data.ctitle}</Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row", paddingLeft: '15px' }}>
              <Text style={{}}>Course Code: </Text>
              <Text style={{ fontFamily: 'Times-Bold' }}>{data.ccode}</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", paddingLeft: '15px' }}>
              <Text style={{}}>Submission Date: </Text>
              <Text style={{ fontFamily: 'Times-Bold' }}>{data.submit}</Text>
            </View>

          </View>

        </>}
        <View style={{ margin: '10px', marginTop: '70px', border: '2px solid black' }}>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flex: 1, borderRight: '2px' }}>
              <Text style={{ textAlign: 'center', padding: '5px' }}>Prepared by:</Text>
            </View>
            <View style={{ flex: 1, }}>
              <Text style={{ textAlign: 'center', padding: '5px' }}>Prepared for:</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, borderRight: '2px', borderTop: '2px' }}>
              <Text style={{ textAlign: 'left', padding: '5px', paddingLeft: '15px' }}>
                Name: {"\n"}{data.sname}{"\n"}ID: {data.sid}{"\n"}Year: {data.year}{"\n"}Semester: {data.semester}{"\n"}Section: {data.section}{"\n"}Batch: {data.batch}</Text>
            </View>
            <View style={{ flex: 1, borderTop: '2px' }}>
              <Text style={{ textAlign: 'left', padding: '5px' }}>{data.tname1}{"\n"}{data.tdes1 ? "-" + data.tdes1 + "," : ""}{"\n"}{data.tname2}{"\n"}{data.tdes2 ? "-" + data.tdes2 + "," : ""}{"\n"}Dept. of {data.tdept}, VU</Text>
            </View>
          </View>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: '60px', paddingRight: '5px' }}>
          <Text style={{ paddingHorizontal: '40px', borderTop: '2px' }}>Signature</Text>
        </View>
      </View>

    </Page>
  </Document>
);

export default MyDocument;