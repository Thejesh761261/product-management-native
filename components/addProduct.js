import React, { useState, useEffect, useRef } from "react";
import { globalstyles } from "../globalstyles/styles";
import { View, Text,TextInput,Picker,TouchableOpacity } from "react-native";
import axios from 'axios';
import { ScrollView } from "react-native-gesture-handler";

export default function AddProductComponent(props){

    console.log(props)
    const id = props.route.params.id;
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [idealFor, setIdealFor] = useState('Men');
    const [quantity, setQuantity] = useState('');
    const [code, setCode] = useState('');
    const [vendor, setVenor] = useState('');
    const [manufacturer,setManufacturer] = useState('');
    const [description,setDescription] = useState('');
    const [color,setColor] = useState('');
    const [size,setSize] = useState('');
    const [material,setMaterial] = useState('');
    const [rating,setRating] = useState(0);
  
    const [nameError, setNameError] = useState('');
    const [priceError, setPriceError] = useState(0);
    const [quantityError, setQuantityError] = useState(0);
    const [codeError, setCodeError] = useState('');
    const [vendorError, setVendorError] = useState('');
    const [manufacturerError, setManufacturerError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [colorError, setColorError] = useState('');
    const [sizeError, setSizeError] = useState('');
    const [materialError, setMaterialError] = useState('');
    const [ratingError, setRatingError] = useState('');

    const [addSuccess,setAddSuccess] = useState(false);

    const firstRender = useRef(true)
  
    useEffect(() => {
      if (firstRender.current) {
        firstRender.current = false
        return
      }
    })
  
    const handleNameChange = (value) => {
      if (value === "" || value === null || value === undefined) {
        setNameError('Product name is required')
      } else {
        setNameError(null)
        setName(value)
      }
    }
    const handlePriceChange = (value) => {
      if (value === "" || value === null || value === undefined || value === 0) {
        setPriceError('Product price is required')
      } else {
        setPriceError(null)
        setPrice(value)
      }
    }
  
    const handleQuantityChange = (value) => {
      if (value === "" || value === null || value === undefined || value === 0) {
        setQuantityError('Product quantity is required')
      } else {
        setQuantityError(null)
        setQuantity(value)
      }
    }

    const handleCodeChange = (value) => {
        if (value === "" || value === null || value === undefined || value === 0) {
          setCodeError('Product code is required')
        } else {
          setCodeError(null)
          setCode(value)
        }
      }

      const handleVendorNameChange = (value) => {
        if (value === "" || value === null || value === undefined || value === 0) {
          setVendorError('Vendor name is required')
        } else {
          setVendorError(null)
          setVenor(value)
        }
      }

      const handleDescriptionChange = (value) => {
        if (value === "" || value === null || value === undefined || value === 0) {
          setDescriptionError('Product description is required')
        } else {
          setDescriptionError(null)
          setDescription(value)
        }
    }

    const handleManufacturerChange = (value) => {
        if (value === "" || value === null || value === undefined || value === 0) {
          setManufacturerError('Manufacturer name is required')
        } else {
          setManufacturerError(null)
          setManufacturer(value)
        }
    }

    const handleColorChange = (value) => {
        if (value === "" || value === null || value === undefined || value === 0) {
          setColorError(' Color is required')
        } else {
            setColorError(null)
          setColor(value)
        }
    }

    const handleSizeChange = (value) => {
        if (value === "" || value === null || value === undefined || value === 0) {
          setSizeError(' Size is required')
        } else {
            setSizeError(null)
            setSize(value)
        }
    }

    const handleRatingChange = (value) => {
        if (value === "" || value === null || value === undefined || value === 0) {
          setRatingError(' Rating is required')
        } else {
            setRatingError(null)
          setRating(value)
        }
    }

    const handleMaterialChange = (value) => {
        if (value === "" || value === null || value === undefined || value === 0) {
          setMaterialError(' Material is required')
        } else {
            setMaterialError(null)
          setMaterial(value)
        }
    }



    


  
    const formValidation = () => {
      if (nameError !== null && priceError !== null && quantityError !== null && codeError !== null && vendorError !== null && manufacturerError !== null && descriptionError !== null && colorError !== null && sizeError !== null && ratingError !== null && materialError !== null ) {
        return false
      }
      else
        return true
    }
  
  
  
    const addProduct = () => {
  
      var prodObj = {
          id,
        name,
        price,
        category,
        quantity,
        code,
        idealFor,
        vendor,
        manufacturer,
        description,
        color,
        size,
        material,
        rating
      }
      let valid = formValidation()
      if (!valid)
        alert('Please provide name,price and quantity')
      else {
        axios.post('http://localhost:3000/products', prodObj)
          .then(response => {
            if (response.status === 201) {
                setAddSuccess(true)
              alert('Product Added')
              props.navigation.pop()
            }
          }).catch(err => {
            console.log(err)
            alert('Try again later')
          })
      }
  
    }
    return (<View style={globalstyles.containerStyle}>
        <ScrollView>
      {/* <Text style={globalstyles.headerStyle}>Add Product</Text>  */}

      <Text style={(addSuccess=== true ? globalstyles.success : globalstyles.hidden)}>Add Success</Text>
  
      <TextInput style={globalstyles.inputBoxStyle, nameError ? globalstyles.textinvalidInput : globalstyles.inputBoxStyle} autoFocus placeholder="enter product name" autoFocus onChangeText={value => handleNameChange(value)}></TextInput>
      <Text style={(nameError !== null) ? globalstyles.textInvalid : globalstyles.hidden}>{nameError}</Text>
  
      <TextInput style={globalstyles.inputBoxStyle, priceError ? globalstyles.textinvalidInput : globalstyles.inputBoxStyle} placeholder="enter product price" keyboardType='numeric' onChangeText={value => handlePriceChange(value)}></TextInput>
      <Text style={(priceError !== 0) ? globalstyles.textInvalid : globalstyles.hidden}>{priceError}</Text>
  
      <TextInput style={globalstyles.inputBoxStyle, quantityError ? globalstyles.textinvalidInput : globalstyles.inputBoxStyle} placeholder="enter product quantity" keyboardType='numeric' onChangeText={value => handleQuantityChange(value)}></TextInput>
      <Text style={(quantityError !== 0) ? globalstyles.textInvalid : globalstyles.hidden}>{quantityError}</Text>

      <TextInput style={globalstyles.inputBoxStyle, codeError ? globalstyles.textinvalidInput : globalstyles.inputBoxStyle} autoFocus placeholder="enter product Code" autoFocus onChangeText={value => handleCodeChange(value)}></TextInput>
      <Text style={(codeError !== null) ? globalstyles.textInvalid : globalstyles.hidden}>{codeError}</Text>

      <TextInput style={globalstyles.inputBoxStyle, vendorError ? globalstyles.textinvalidInput : globalstyles.inputBoxStyle} autoFocus placeholder="enter Vendor name" autoFocus onChangeText={value => handleVendorNameChange(value)}></TextInput>
      <Text style={(vendorError !== null) ? globalstyles.textInvalid : globalstyles.hidden}>{vendorError}</Text>

      <TextInput style={globalstyles.inputBoxStyle, manufacturerError ? globalstyles.textinvalidInput : globalstyles.inputBoxStyle} autoFocus placeholder="enter manufacturer name" autoFocus onChangeText={value => handleManufacturerChange(value)}></TextInput>
      <Text style={(manufacturerError !== null) ? globalstyles.textInvalid : globalstyles.hidden}>{manufacturerError}</Text>
  
      <TextInput style={globalstyles.inputBoxStyle, descriptionError ? globalstyles.textinvalidInput : globalstyles.inputBoxStyle} autoFocus placeholder="enter product description" autoFocus onChangeText={value => handleDescriptionChange(value)}></TextInput>
      <Text style={(descriptionError !== null) ? globalstyles.textInvalid : globalstyles.hidden}>{descriptionError}</Text>

      <TextInput style={globalstyles.inputBoxStyle, colorError ? globalstyles.textinvalidInput : globalstyles.inputBoxStyle} autoFocus placeholder="enter product color" autoFocus onChangeText={value => handleColorChange(value)}></TextInput>
      <Text style={(colorError !== null) ? globalstyles.textInvalid : globalstyles.hidden}>{colorError}</Text>

      <TextInput style={globalstyles.inputBoxStyle, sizeError ? globalstyles.textinvalidInput : globalstyles.inputBoxStyle} autoFocus placeholder="enter product size" autoFocus onChangeText={value => handleSizeChange(value)}></TextInput>
      <Text style={(sizeError !== null) ? globalstyles.textInvalid : globalstyles.hidden}>{sizeError}</Text>

      <TextInput style={globalstyles.inputBoxStyle, materialError ? globalstyles.textinvalidInput : globalstyles.inputBoxStyle} autoFocus placeholder="enter material of the product" autoFocus onChangeText={value => handleMaterialChange(value)}></TextInput>
      <Text style={(materialError !== null) ? globalstyles.textInvalid : globalstyles.hidden}>{materialError}</Text>

      <TextInput style={globalstyles.inputBoxStyle, ratingError ? globalstyles.textinvalidInput : globalstyles.inputBoxStyle} autoFocus keyboardType='numeric' placeholder="enter initial rating" autoFocus onChangeText={value => handleRatingChange(value)}></TextInput>
      <Text style={(ratingError !== null) ? globalstyles.textInvalid : globalstyles.hidden}>{ratingError}</Text>
  
      <label>Category:</label>
      <Picker style={globalstyles.pickerStyle}
        selectedValue={category}
        onValueChange={currentCategory => setCategory(currentCategory)}>
        <Picker.Item label="Formals" value="Formals" />
        <Picker.Item label="Kurtas" value="Kurtas" />
        <Picker.Item label="Jeans" value="Jeans" />
        <Picker.Item label="Sarees" value="Sarees" />
        <Picker.Item label="Shorts" value="Shorts" />
        <Picker.Item label="TShirt" value="Tshirt" />
      </Picker>
  
      <label>Ideal for:</label>
      <Picker style={globalstyles.pickerStyle}
        selectedValue={idealFor}
        onValueChange={ideal => setIdealFor(ideal)}>
        <Picker.Item label="Men" value="Men" />
        <Picker.Item label="Women" value="Women" />
      </Picker>
        
      <TouchableOpacity>
        <Text style={globalstyles.addProd} onPress={addProduct}>Add Product</Text>
      </TouchableOpacity>
      <Text style={(addSuccess=== true ? globalstyles.success : globalstyles.hidden)}>Product Added Successfully</Text>
  
      </ScrollView>
  
    </View>);
}