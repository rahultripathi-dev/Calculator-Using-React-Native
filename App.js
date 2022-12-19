import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

const App = () => {

  const [num, setnum] = useState()

  const  handlecal=(exp)=>{
    let res = num ? num+exp : exp
    setnum(res);
    // let res = num;
    // console.log(res);
  }

  const [res, setres] = useState()
  const ans = ()=>{
    let result =  eval(num)
    setres(result)
  }

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Text style={{fontSize: 35, color: '#fff', marginRight: 15}}>{num}</Text>
        <Text style={{fontSize: 35, color: '#fff', marginRight: 15}}>{`${res ? `= `+ res : ''}`}</Text>
      </View>
      <View style={{width:'100%',borderWidth:.4,borderColor:'#fff',marginTop:10}}/>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={()=>{setnum(),setres()}} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: 'orange',fontWeight:'400'}}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlecal()} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: 'orange',fontWeight:'400'}}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlecal('%')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: 'orange',fontWeight:'400'}}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlecal('/')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: 'orange',fontWeight:'400'}}>/</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={()=>handlecal('7')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: '#fff',fontWeight:'400'}}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlecal('8')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: '#fff',fontWeight:'400'}}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlecal('9')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: '#fff',fontWeight:'400'}}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlecal('*')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: 'orange',fontWeight:'400'}}>*</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={()=>handlecal('4')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: '#fff',fontWeight:'400'}}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlecal('5')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: '#fff',fontWeight:'400'}}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlecal('6')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: '#fff',fontWeight:'400'}}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlecal('-')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: 'orange',fontWeight:'400'}}>-</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={()=>handlecal('1')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: '#fff',fontWeight:'400'}}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlecal('2')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: '#fff',fontWeight:'400'}}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlecal('3')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: '#fff',fontWeight:'400'}}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlecal('+')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: 'orange',fontWeight:'400'}}>+</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={()=>handlecal('00')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: '#fff',fontWeight:'400'}}>00</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlecal('0')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: '#fff',fontWeight:'400'}}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlecal('.')} style={{width:66,height:66,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 34, color: '#fff',fontWeight:'400'}}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>ans()} style={{width:66,height:66,justifyContent:'center', alignItems:'center',backgroundColor:'orange',borderRadius:100}}>
            <Text style={{fontSize: 34, color: '#fff',fontWeight:'400'}}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
