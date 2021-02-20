import React from "react"
import { API, Auth } from "aws-amplify";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as queries from "../graphql/customQueries";


const initialState = {
  establishmentItems: null,
  establishmentsByID: {},
  establishmentsLoading: null,
  establishmentsError: null,
  currentGPS: {
    lat: null,
    lon: null
  }
}

const EstablishmentsContext = React.createContext()

class ContextProviderComponent extends React.Component {
  state = {
   ...initialState
  }

  async componentDidMount() {
    console.log("did mount")
    try {
      console.log("get location")
      this.findEstablishmentsByLocation({byGPS: { gps: {lat, lon}}})
      const {lat, lon} = await this.getCurrentLocation();
      console.log('getCurrentLocation', lat, lon)
      // if (lat && lon) {
      // }
    } catch (error) {
      console.log({error})
    }
   
  }



  getCurrentLocation = async () => {
    console.log('getting location')
    try {
      console.log("get status")
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      console.log({status})
      if (status !== 'granted') {
        return null;
      }
      const isEnabled = await Location.hasServicesEnabledAsync()
      console.log("get lcoation", isEnabled)
      try {
        let {coords: {latitude: lat, longitude: lon}} = await Location.getCurrentPositionAsync({});
        console.log({lat, lon})
        return {lat, lon}
        
      } catch (error) {
        console.log("error", error)
      }
     
    } catch (error) {
      console.log({error});
      return null
    }
  }

  findEstablishmentsByLocation = async ({byGPS}) => {
    this.setState({establishmentsLoading: true}
        
        
      )
    try {
      const {
        data: { findEstablishments: {items = []} = {} },
      } = await API.graphql({ 
        query: queries.findEstablishments, 
        variables: {
          input: {
            byGPS: {
              gps: {lon: "-87.67958068847656", lat: "41.88310241699219"}, 
              radius: 10
            }
          } 
        },
        authMode: "AWS_IAM",
      }) 
      if (items)  {
        console.log({items})
        this.setState({establishmentsLoading: false, establishmentItems: items})

      }
    } catch (error) {
      this.setState({establishmentsLoading: false, establishmentsError: true})
      console.log({error})
    }
  }



  render() {

    return (
      
          <EstablishmentsContext.Provider 
            value={{
              ...this.state,
              findEstablishmentsByLocation: this.findEstablishmentsByLocation
            }}>
             {!this.state.establishmentsLoading && this.props.children}
           </EstablishmentsContext.Provider>
     
    )
  }
}

export {
  EstablishmentsContext,
  ContextProviderComponent
}