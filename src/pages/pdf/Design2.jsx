import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: '30px',
    fontFamily: 'Times-Roman',
    position:"relative",
  },
  body:{
    // paddingTop: '10px',
    border: '2px solid black',
    borderRadius: '5px',
    height: '100%',
    display:'flex',
    flexDirection:'row',
  },
  
  cse:{
    height: '70px',
    width:'70px',
    
  },
  vu:{
    height: '70px',
    width:'50px',
  }
});

// Create Document Component
const  Design2 = ({data,assignment}) => {

 

  return (
  <Document>
    <Page  style={styles.page} >
      <View style={styles.body}>
      
        
      
      <View style={{flex:2,backgroundColor:"black"}}>

      </View>
      
      <View style={{flex:19,backgroundColor:""}}>

      </View>
      
      
      </View>
      
    </Page>
  </Document>
)}
;

export default Design2;