import React, { useState } from 'react';
import { View, Image, TextInput, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Dropdown from '../../../components/dropdown';
import DropdownDateofBirth from '../../../components/dropDownDateofBirth';
import TextBox from '../../../components/textBox';
import CalendarView from '../../../components/calendar';
import { PlainButton } from '../../../components/plainButton';
import { THEME_COLOR, SILVER_COLOR, INACTIVE_COLOR, WHITE_COLOR, BLACK_COLOR } from '../../../constants/colors/Colors';
import { UPLOAD_IMAGE } from '../../../constants/imagepath/Imagepath';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const StudentForm = (props) => {

    const GenderList = [
        {
            label: 'Male',
            value: 'Male',
        },
        {
            label: 'Female',
            value: 'Female',
        },
        {
            label: 'Others',
            value: 'Others',
        },
        {
            label: 'I donot prefer to say',
            value: 'I donot prefer to say',
        },
    ];

    const raceList = [
        {
            label: "American indian or Alaska Native",
            value: 'American indian or Alaska Native',
        },
        {
            label: 'Asin',
            value: 'Asin',
        },
        {
            label: 'Black or African American',
            value: 'Black or African American',
        },
        {
            label: 'White',
            value: 'White',
        },
        {
            label: 'I donot prefer to say',
            value: 'I donot prefer to say',
        },
    ];

    const stateList = [
        {
            label: "Alabama",
            value: 'Alabama',
        },
        {
            label: 'Alaska',
            value: 'Alaska',
        },
        {
            label: 'Arizona',
            value: 'Arizona',
        },
    ];

    const majorList = [
        {
            label: "Science",
            value: 'Science',
        },
        {
            label: 'Commerce',
            value: 'Commerce',
        },
        {
            label: 'Arts',
            value: 'Arts',
        },
    ];


    const disabilitiesList = [
        {
            label: "None",
            value: 'None',
        },
        {
            label: 'Autism',
            value: 'Autism',
        },
        {
            label: 'Mental Health',
            value: 'Mental Health',
        },
    ];

    const [calendarStatus, setCalendarStatus] = useState(false);
    const [dob, setDob] = useState('')
    const [gender, setGenderList] = useState(null)
    const [race, setRaceList] = useState(null)
    const [major, setMajorList] = useState(null)
    const [disabilities, setDisabilitiesList] = useState(null)
    const [fName, onChangefName] = useState('');
    const [lName, onChangelName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [phoneNo, onChangePhoneNo] = useState('');
    const [address, onChangeAddress] = useState("")
    const [state, setStateList] = useState(null)
    const [zipcode, onChangeZipCode] = useState("")
    const [currentschool, onChangeCurrentSchool] = useState("")
  
    const toggleCalendar = () => {
        setCalendarStatus(!calendarStatus)
    }

    const getDate = (day) => {
        setDob(day.dateString)
        setCalendarStatus(!calendarStatus)
    }
   

    return (
        <>
            {calendarStatus && <CalendarView onDayPress={getDate} />}

            <View style={{ marginBottom: wp("6%") }}>
                <Text style={styles.label}>First Name</Text>
                <View style={[{ height: hp('6%'), borderColor: fName == "" ? "#EEEEEE" : "#5EE1E8", borderWidth: 1 }, { flexDirection: 'row' }]}>
                    <View style={{ flex: .1, alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign
                            name={'user'}
                            size={wp('5%')}
                            color={'#E2E1E1'}
                        />
                    </View>
                    <TextInput
                        style={{ flex: .9, paddingLeft: 5 }}
                        value={fName}
                        onChangeText={(text) => { onChangefName(text) }}
                    />
                </View>
            </View>

            <View style={{ marginBottom: wp("6%") }}>
                <Text style={styles.label}>Last Name</Text>
                <View style={[{ height: hp('6%'), borderColor: lName == "" ? "#EEEEEE" : "#5EE1E8", borderWidth: 1 }, { flexDirection: 'row' }]}>
                    <View style={{ flex: .1, alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign
                            name={'user'}
                            size={wp('5%')}
                            color={'#E2E1E1'}
                        />
                    </View>
                    <TextInput
                        style={{ flex: .9, paddingLeft: 5 }}
                        value={lName}
                        onChangeText={(text) => { onChangelName(text) }}
                    />
                </View>
            </View>

            <View style={{ marginBottom: wp("6%") }}>
                <Text style={styles.label}>Email Address</Text>
                <View style={[{ height: hp('6%'), borderColor: email == "" ? "#EEEEEE" : "#5EE1E8", borderWidth: 1 }, { flexDirection: 'row' }]}>
                    <View style={{ flex: .1, alignItems: 'center', justifyContent: 'center' }}>
                        <MaterialCommunityIcons
                            name={'email-edit-outline'}
                            size={wp('5%')}
                            color={'#E2E1E1'}
                        />
                    </View>
                    <TextInput
                        style={{ flex: .9, paddingLeft: 5 }}
                        value={email}
                        onChangeText={(text) => { onChangeEmail(text) }}
                    />
                </View>
            </View>

            <View style={{ marginBottom: wp("6%") }}>
                <Text style={styles.label}>Phone Number</Text>
                <View style={[{ height: hp('6%'), borderColor: phoneNo == "" ? "#EEEEEE" : "#5EE1E8", borderWidth: 1 }, { flexDirection: 'row' }]}>
                    <View style={{ flex: .1, alignItems: 'center', justifyContent: 'center' }}>
                        <Feather
                            name={'phone-forwarded'}
                            size={wp('5%')}
                            color={'#E2E1E1'}
                        />
                    </View>
                    <TextInput
                        style={{ flex: .9, paddingLeft: 5 }}
                        value={phoneNo}
                        onChangeText={(text) => { onChangePhoneNo(text) }}
                    />
                </View>
            </View>


            <DropdownDateofBirth
                label={'Date of birth'}
                value={dob}
                onPress={toggleCalendar}
                customStyle={{ marginBottom: hp('2%') }}
            />
            <Dropdown
                label={'Gender'}
                placeholder={{
                    label: 'Choose one',
                    value: 'Choose one',
                    color: "red"
                }}
                value={gender}
                items={GenderList}
                onChange={setGenderList}
                customStyle={{ marginBottom: hp('2%') }}
            />
           <Dropdown
                label={'Race'}
                placeholder={{
                    label: 'Choose one',
                    value: 'Choose one',
                    color: "red"
                }}
                value={race}
                items={raceList}
                onChange={setRaceList}
                customStyle={{ marginBottom: hp('2%') }}
            />
            <View style={{ marginBottom: wp("6%") }}>
                <Text style={styles.label}> Address</Text>
                <View style={[{ height: hp('6%'), borderColor: address == "" ? "#EEEEEE" : "#5EE1E8", borderWidth: 1 }, { flexDirection: 'row' }]}>
                    <View style={{ flex: .1, alignItems: 'center', justifyContent: 'center' }}>
                        <MaterialCommunityIcons
                            name={'email-edit-outline'}
                            size={wp('5%')}
                            color={'#E2E1E1'}
                        />
                    </View>
                    <TextInput
                        style={{ flex: .9, paddingLeft: 5 }}
                        value={address}
                        onChangeText={(text) => { onChangeAddress(text) }}
                    />
                </View>
            </View>
            <Dropdown
                label={'State of residence'}
                placeholder={{
                    label: "Choose one",
                    value: "Choose one",
                    color: "red"

                }}
                value={state}
                items={stateList}
                onChange={setStateList}
                customStyle={{ marginBottom: hp('2%') }}
            />
           <View style={{ marginBottom: wp("6%") }}>
                <Text style={styles.label}>Zip Code</Text>
                <View style={[{ height: hp('6%'), borderColor: zipcode == "" ? "#EEEEEE" : "#5EE1E8", borderWidth: 1 }, { flexDirection: 'row' }]}>
                    <View style={{ flex: .1, alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign
                            name={'user'}
                            size={wp('5%')}
                            color={'#E2E1E1'}
                        />
                    </View>
                    <TextInput
                        style={{ flex: .9, paddingLeft: 5 }}
                        value={zipcode}
                        onChangeText={(text) => { onChangeZipCode(text) }}
                    />
                </View>
            </View>

            <View style={{ marginBottom: wp("6%") }}>
                <Text style={styles.label}>Current School</Text>
                <View style={[{ height: hp('6%'), borderColor: currentschool == "" ? "#EEEEEE" : "#5EE1E8", borderWidth: 1 }, { flexDirection: 'row' }]}>
                    <View style={{ flex: .1, alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign
                            name={'user'}
                            size={wp('5%')}
                            color={'#E2E1E1'}
                        />
                    </View>
                    <TextInput
                        style={{ flex: .9, paddingLeft: 5 }}
                        value={currentschool}
                        onChangeText={(text) => { onChangeCurrentSchool(text) }}
                    />
                </View>
            </View>

            <Dropdown
                label={'Major'}
                placeholder={{
                    label: "Choose one",
                    value: "Choose one",
                    color: "red"

                }}
                value={major}
                items={majorList}
                onChange={setMajorList}
                customStyle={{ marginBottom: hp('2%') }}
            />
             <Dropdown
                label={'Disabilities'}
                placeholder={{
                    label: "Choose one",
                    value: "Choose one",
                    color: "red"

                }}
                value={disabilities}
                items={disabilitiesList}
                onChange={setDisabilitiesList}
                customStyle={{ marginBottom: hp('2%') }}
            />

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: wp("4%"), paddingVertical: 10 }}>
                <Entypo name="plus" size={30} color={THEME_COLOR} />
                <PlainButton
                    text={'ADD STUDENT'}
                    textStyle={{
                        color: THEME_COLOR,
                        fontWeight: "bold",
                        fontSize: 16
                    }}
                    onClick={props.addStudent}
                />
            </View>

            <PlainButton
                text={'Continue'}
                textStyle={{
                    color: WHITE_COLOR,
                    fontSize: wp('5%'),
                    letterSpacing: 1
                }}
                buttonStyle={{
                    backgroundColor: THEME_COLOR,
                    height: hp('6%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: wp("6%"),
                    borderRadius: 5
                }}
                onClick={props.onClick}
            />
        </>
    )
}

const styles = StyleSheet.create({

    label: {
        marginBottom: wp("2%"),
        color: BLACK_COLOR
    },
})

export default StudentForm;