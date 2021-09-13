/* eslint-disable max-lines */
import React, { FC } from 'react'
import moment from 'moment'
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer'
import { Medicament, User } from '../../../helpers/types'

interface Props {
 medications: Medicament[]
 patient: User
 medecin: User
}

const PrescriptionOverview: FC<Props> = ({ medications, patient, medecin }) => {
 const calculateAge = (date: string | Date) => {
  const birthDate = new Date(date)
  const otherDate = new Date()

  let years = otherDate.getFullYear() - birthDate.getFullYear()

  if (
   otherDate.getMonth() < birthDate.getMonth() ||
   (otherDate.getMonth() === birthDate.getMonth() && otherDate.getDate() < birthDate.getDate())
  ) {
   years -= years
  }

  return years
 }
 // Create styles
 const styles = StyleSheet.create({
  page: {
   flexDirection: 'column',
   backgroundColor: '#E4E4E4',
   alignItems: 'center',
   height: '100vh',
   padding: '20',
   fontSize: '15',
   fontWeight: 'normal',
  },
  section: {
   textAlign: 'center',
   fontWeight: 'bold',
   fontSize: '17',
   marginBottom: '40',
  },
  header: {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginBottom: '40',
   width: '100%',
  },

  infoTitle: {
   fontWeight: 'ultrabold',
  },
  infoValue: {
   fontSize: '13',
   fontWeight: 'light',
  },

  subHeader: {
   textAlign: 'center',
   textDecoration: 'underline',
   textTransform: 'uppercase',
   fontSize: '20',
   fontWeight: 'bold',
   marginBottom: '20',
  },

  container: {
   width: '100%',
   padding: '20',
  },

  item: {
   width: '100%',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginBottom: '20',
  },
  firstSide: {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
  },

  content: {
   display: 'flex',
   flexDirection: 'column',
   marginLeft: '10',
  },

  signature: {
   textAlign: 'center',
   fontWeight: 'bold',
   marginTop: '20',
  },

  footer: {
   position: 'absolute',
   bottom: 0,
   width: '100%',
   borderTop: '1 solid black',
   fontSize: '10',
   padding: '10',
  },
 })

 return (
  <PDFViewer>
   <Document>
    <Page size="A4" style={styles.page}>
     <View style={styles.section}>
      <Text>CABINET MEDICAL DE ESI SBA</Text>
     </View>
     <View style={styles.header}>
      <View>
       <Text>Dr. {medecin.lastname}</Text>
       <Text>Médecin Généraliste</Text>
      </View>
      <View>
       <Text>
        <Text style={styles.infoTitle}>Le:</Text>{' '}
        <Text style={styles.infoValue}>{moment().format('l')}</Text>
       </Text>
       <Text>
        <Text style={styles.infoTitle}>Nom:</Text>{' '}
        <Text style={styles.infoValue}>{patient.firstname}</Text>
       </Text>
       <Text>
        <Text style={styles.infoTitle}>Prénom:</Text>{' '}
        <Text style={styles.infoValue}>{patient.lastname}</Text>
       </Text>
       <Text>
        <Text style={styles.infoTitle}>Age:</Text> <Text style={styles.infoValue}>{calculateAge(patient.birthDay)} ans</Text>
       </Text>
      </View>
     </View>
     <View>
      <Text style={styles.subHeader}>Ordonnance</Text>
     </View>
     {/* Global container */}
     <View style={styles.container}>
      {/* Item Container  */}
      {medications.map((med, index) => {
       return (
        <View key={med.nomCommercial} style={styles.item}>
         {/* First side */}
         <View style={styles.firstSide}>
          <Text>N°{index + 1}</Text>
          <View style={styles.content}>
           <Text>{med.nomCommercial}</Text>
           <Text>
            1 {med.type} {med.foisParJours}x /Jours
           </Text>
          </View>
         </View>
         {/* Second side */}
         <View>
          <Text>
           {med.qnt} {med.qntType === 'qsp' ? 'QSP' : 'Boite(s)'}
          </Text>
         </View>
        </View>
       )
      })}

      {/* END Item Container  */}

      {/* Signature */}
      <View style={styles.signature}>
       <Text>Le Medecin</Text>
      </View>
      {/* End Signature */}
     </View>

     {/* Prescription Footer */}
     <View style={styles.footer}>
      <Text>BP 73, Bureau de poste EL WIAM Sidi Bel Abbés 22016, Algérie</Text>
      <Text>Tél: +213-48-74-94-52 / Email: contact@esi-sba.dz</Text>
     </View>
     {/* End Prescription Footer */}
    </Page>
   </Document>
  </PDFViewer>
 )
}

export default PrescriptionOverview
