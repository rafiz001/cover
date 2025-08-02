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
    flexDirection: 'row',
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
  }
});

// Create Document Component
const Design2 = ({ data, assignment }) => {

function newLineAfterNWord(params, n) {
  let arrays = params.split(" ");
  let out = "";
  let i=0;
  arrays.forEach((e, k) => {
    i+=1;
    out += e + " ";
    if (i == n) {out += "\n";i=0;}
    
  });

  return out;
}

  return (
    <Document>
      <Page style={styles.page} >
        <View style={styles.body}>

          <View style={{ position: 'absolute', top: "0px", right: "0px", height: "100%", width: "25%", backgroundColor: "#d1d1d1", display:"flex", justifyContent:'flex-end' }}>
          <Text style={{textAlign:'center', borderTop:'2px',fontFamily: 'Poppins', fontSize: "15px", paddingBottom:"20px"}}>Signature</Text>
          </View>
          <View style={{ position: 'absolute', top: "0px", right: "0px",
             width: "200px", height: "200px", backgroundColorr: 'cyan', overflow: "hidden" }} >
            <View style={{ position: 'absolute', top: "5px", right: "-35px",
               width: "70px", height: "25px", backgroundColor: "black", transform: "rotate(45deg)", }}></View>
            <View style={{ position: 'absolute', top: "7px", right: "-25px",
               width: "100px", height: "20px", backgroundColor: "grey", transform: "rotate(45deg)", }}></View>
            <View style={{ position: 'absolute', top: "100x", right: "-75px",
               width: "150px", height: "27px", backgroundColor: "grey", transform: "rotate(45deg)", }}></View>
            <View style={{ position: 'absolute', top: "40px", right: "-10px",
               width: "200px", height: "25px", backgroundColor: "black", transform: "rotate(45deg)", }}></View>
            <View style={{ position: 'absolute', top: "7px", right: "-5px",
               width: "150px", height: "25px", backgroundColor: "black", transform: "rotate(45deg)", }}></View>
          </View>

          <View style={{ flex: 2, backgroundColor: "black" }}>

          </View>

          <View style={{ flex: 19, backgroundColor: "", paddingTop: "20px", paddingLeft: "10px" }}>
            <View style={{ flexDirection: "row" }}>
              <Image style={styles.vu} src={data.color ? "/cover/static/VU.png" : "/cover/static/VU_mono.png"} />
              <Image style={styles.cse} src={data.color ? "/cover/static/CSE.png" : "/cover/static/CSE_mono.png"} />


            </View>
            <Text style={{ fontFamily: 'Poppins-Bold' }}>{assignment ? "ASSIGNMENT" : "LAB REPORT"}: #{data.report}</Text>
            <Text style={{ fontFamily: 'Poppins-Bold', marginTop: '10px', textAlign: 'left',lineHeight: 1,  }}>
              {data.ctitle && newLineAfterNWord(data.ctitle.toUpperCase(), Number.parseInt(data.nl))}
              </Text>
            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: "40px" }}>{data.ccode && data.ccode.toUpperCase()}</Text>
            {data.willIssue && <><Text style={{ fontFamily: 'Poppins-Bold', fontSize: "20px" }}>Issue Date:</Text>
            <Text style={{ fontFamily: 'Poppins', fontSize: "20px" }}>{data.issue?data.issue:" "}</Text></>}
            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: "20px" }}>Submission Date:</Text>
            <Text style={{ fontFamily: 'Poppins', fontSize: "20px" }}>{data.submit?data.submit:" "}</Text>
            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: "25px", marginTop:"10px" }}>PREPAIRED BY:</Text>
            <Text style={{ fontFamily: 'Poppins', fontSize: "20px" }}>{data.sname?data.sname:" "}</Text>
            <Text style={{ fontFamily: 'Poppins', fontSize: "20px" }}>ID: {data.sid}</Text>
            <Text style={{ fontFamily: 'Poppins', fontSize: "20px" }}>Sem: {data.semester}</Text>
            <Text style={{ fontFamily: 'Poppins', fontSize: "20px" }}>Sec: {data.section}</Text>
            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: "25px" }}>PREPAIRED FOR:</Text>
            <Text style={{ fontFamily: 'Poppins', fontSize: "20px" }}>{data.tname1?data.tname1:" "}</Text>
            <Text style={{ fontFamily: 'Poppins', fontSize: "20px", color:"#474747" }}>{data.tdes1?"-"+data.tdes1:" "}</Text>
            <Text style={{ fontFamily: 'Poppins', fontSize: "20px" }}>{data.tname2}</Text>
            <Text style={{ fontFamily: 'Poppins', fontSize: "20px", color:"#474747" }}>{data.tdes2?"-"+data.tdes2:""}</Text>
            <Text style={{ fontFamily: 'Poppins', fontSize: "20px" }}>Dept. of {data.tdept}, VU</Text>
          </View>



        </View>

      </Page>
    </Document>
  )
}
  ;

export default Design2;