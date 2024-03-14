// // import React from "react";
// // import "./styles/filter.css";
// // // import image1 from "./images/meal2.jpg";
// // // import image2 from "./images/meal3.jpg";
// // // import Header from "./Header";
// // // import Logo from "./logo";
// // import axios from "axios";
// // import queryString from "query-string";
// // // import axios from "axios";
// // // import queryString from "query-string";
// // class Filter extends React.Component{
// //     // constructor(){
// //     //     super();
// //     //     this.state={
// //     //         restuarant:[],
// //     //         mealtype_id:undefined,
// //     //         location_id:undefined,
// //     //         option:""
// //     //     }
// //     // }
// //     // componentDidMount = async () => {
// //     //     // Get the values from query string which is coming from homepage.
// //     //     const qs = queryString.parse(this.props.location.search);
// //     //     const location = qs.location;
// //     //     const mealtype = Number(qs.mealtype);
// //     //     const mealtype_name = qs.mealtype_name;

// //     //     this.setState({ option: mealtype_name });
// //     //     // Declare the locations and mealtypes value in payload.
// //     //     const inputObj = {
// //     //         location_id: location,
// //     //         mealtype_id: mealtype
// //     //     }

// //     //     // Making api call to fetch the restaurant data based on payload.
// //     //     const restuarant = await axios({
// //     //         method: 'POST',
// //     //         url: 'http://localhost:2000/filter',
// //     //         headers: { 'Content-Type': 'application/json' },
// //     //         data: inputObj
// //     //     })
// //     //     // once get the value then update the state variable.
// //     //     this.setState({ restuarant: restuarant.data, mealtype_id: mealtype, location_id: location });

// //     //     // Making api call for locations data to showing drop-downs filters.
// //     //     const locationDD = await axios({
// //     //         method: 'GET',
// //     //         url: 'http://localhost:2000/location',
// //     //         headers: { 'Content-Type': 'application/json' }
// //     //     });
// //     //     // Update the location variable in state.
// //     //     this.setState({ location: locationDD.data });
// //     // }
// //     constructor(){
// //         super();
// //         this.state={
// //             locations:[],
// //             restaurants:[]
// //         }
// //     }
// //     componentDidMount(){
// //         const qs=queryString.parse(this.props.location.search);
// //         const {mealtype_id} = qs;
// //         const filterObj={
// //             mealtype:Number(mealtype_id)
// //         }
// //         axios({
// //             method:"GET",
// //             url:"http://localhost:8900/locations",
// //             headers:{"Content-Type":"application/json"}
// //         })
// //         .then(response=>{
// //             this.setState({locations:response.data});
// //         })
// //         .catch(err=>console.log(err));
// //         axios({
// //             method:"POST",
// //             url:"http://localhost:8900/filter",
// //             headers:{"Content-Type":"application/json"},
// //             data:filterObj
// //         })
// //         .then(response=>{
// //             this.setState({ restaurants:response.data});
// //         })
// //         .catch(err=>console.log(err));
// //     }
// //     render(){
// //         const {locations, restaurants}=this.state;
// //         return(
// //         <div className="fluid">
           
// //         <div  style={{backgroundColor:"red"}}>
// //                 {/* <Logo/>
// //                 <Header /> */}
// //             </div>
// //            <h2 id="head1">Breakfast Places in Mumbai</h2>
// //            <div id="container1">
// //             <div id="filter">
// //                 <h3>Filters</h3>
// //                 <h2 className="sort"> / sort</h2>
// //                 <h4>Select Location</h4>
// //                 <form>
// //                 <input type="text" list="location"  placeholder="Select Location" className="location"/>
// //                 <datalist id="location">
// //                 {locations.map((item)=>{
// //           return <option >{`${item.name}, ${item.city}`}</option>;
// //          })}
// //                 </datalist>
// //                 <p><b>Cuisine</b></p>

// //                <input type="checkbox" />North Indian<br/>
// //                 <input type="checkbox"/>South Indian<br/>
// //                 <input type="checkbox"/>Chinese<br/>
// //                 <input type="checkbox"/>Fast Food<br/>
// //                 <input type="checkbox"/>Street Food
// //                 <p><b>Cost for two</b></p>
// //                 <input type="radio" name="cost"/>Less than &#8377;500<br/>
// //                 <input type="radio" name="cost"/> &#8377;500 to  &#8377;1000<br/>
// //                 <input type="radio" name="cost"/> &#8377;1000 to  &#8377;1500<br/>
// //                 <input type="radio" name="cost"/> &#8377;1500 to  &#8377;2000<br/>
// //                 <input type="radio" name="cost"/> &#8377;2000 +<br/>
// //                 <p><b>Sort</b></p>
// //                 <input type="radio" name="price"/>Price High to Low<br/>
// //                 <input type="radio" name="price"/>Price Low to High<br/>
// //                 </form>
            
// //             </div>
// //             <div id="filter2">
// //                 <input type="text " list="sort" placeholder="Filter / Sort" className="location2"/>
// //                 <datalist id="sort">
// //                     <option>Delhi</option>
// //                     <option>Mumbai</option>
// //                     <option>Chennai</option>
// //                     <option>Banglore</option>
// //                     <option>Calcutta</option>
// //                     <option>Coimbatore</option>
// //                 </datalist>
// //             </div>
// //             <div id="container2">
// //                 { restaurants.length >0 ? restaurants.map((item)=>{
// //                         return   <div className="box">
// //                         <img src={`./${item.image}`}alt="" className="filterimg"/>
// //                         <div className="inside">
// //                           <h4>{item.name}</h4>
// //                           <h5>{item.locality}</h5>
// //                           <p className="p2">{item.city}</p>
// //                         </div>
// //                         <hr/>
// //                         <p>CUISINES     :<b>{item.cuisine_id.map(ele=>`${ele.name} `)}</b></p>
// //                         <p>COST FOR TWO:<b>&#8377;{item.min_price}</b></p>
// //                       </div>
// //                 }):<div>No Records found ....</div>}
// //                 {restaurants.length>0 ?
// //                 <div id="button">
// //                     <button className="btn2">&#60;</button>
// //                     <button className="btn2">1</button>
// //                     <button className="btn2">2</button>
// //                     <button className="btn2">3</button>
// //                     <button className="btn2">4</button>
// //                     <button className="btn2">5</button>
// //                     <button className="btn2">&#62;</button>
// //                 </div>:null
// //     }
// //             </div> 
// //           </div>
// //         </div>
// //         )
// //     }
// // }
// // export default Filter;

















// import React from "react";
// import axios from "axios";
// import queryString from 'query-string'
// import { withRouter } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// class Filter extends React.Component {
//     //while we desturcture the mealtype we get in string format,QS-used to convert the string into an object.
//     constructor() {
//         super();
//         this.state = {
//             restuarant: [],          // Whole restuarant data.
//             option: "",              // This shows heading based on what mealtypes we clicks. (ex) Breakfast places in delhi.
//             currentPage: 1,           // This is current page which default value is 1.
//             itemsPerPage: 2,         // This how many restaurant data will show per page. ideally 2.
//             mealtype_id: undefined,  // This is mealtype_id
//             location_id: undefined,  // This is location_id
//             sort: 1,                 // This is sort value. if (1) = Ascending order , (-1) = Descending order.
//             cuisine_id: [],          // This is cuisine_id. Initially empty array.
//             lcost: undefined,        // This is minimum price for restaurant.
//             hcost: undefined,        // This is maximum price for restaurant.
//             location: []             // This is locations dropdown data.
//         }
//     }
//     componentDidMount = async () => {
//         // Get the values from query string which is coming from homepage.
//         const qs = queryString.parse(this.props.location.search);
//         const location = qs.location;
//         const mealtype = Number(qs.mealtype);
//         const mealtype_name = qs.mealtype_name;

//         this.setState({ option: mealtype_name });
//         // Declare the locations and mealtypes value in payload.
//         const inputObj = {
//             location_id: location,
//             mealtype_id: mealtype
//         }

//         // Making api call to fetch the restaurant data based on payload.
//         const restuarant = await axios({
//             method: 'POST',
//             url: 'http://localhost:8900/filter',
//             headers: { 'Content-Type': 'application/json' },
//             data: inputObj
//         })
//         // once get the value then update the state variable.
//         this.setState({ restuarant: restuarant.data, mealtype_id: mealtype, location_id: location });

//         // Making api call for locations data to showing drop-downs filters.
//         const locationDD = await axios({
//             method: 'GET',
//             url: 'http://localhost:2000/location',
//             headers: { 'Content-Type': 'application/json' }
//         });
//         // Update the location variable in state.
//         this.setState({ location: locationDD.data });
//     }
//     // handleLocationChange = async (event) => {
//     //     // Getting the location id from drop-down.
//     //     const location_id = event.target.value;
//     //     const { sort, mealtype_id, lcost, hcost, cuisine_id } = this.state;

//     //     // Loading the all values in payload.
//     //     const inputObj = {
//     //         sort: sort,
//     //         mealtype_id: mealtype_id,
//     //         location_id: location_id === "Select Locations" ? undefined : location_id,
//     //         lcost: lcost,
//     //         hcost: hcost,
//     //         // if cuisine_id is empty array, this function willn't work so set the value as undefined.
//     //         cuisine_id: cuisine_id && cuisine_id.length > 0 ? cuisine_id : undefined
//     //     }
//     //     // Making the api call to get location based restaurant data.
//     //     const restuarant = await axios({
//     //         method: 'POST',
//     //         url: 'http://localhost:8900/filter',
//     //         headers: { 'Content-Type': 'application/json' },
//     //         data: inputObj
//     //     });
//     //     // Once get the data, then update restaurant, location id and page number in 1.
//     //     this.setState({ restuarant: restuarant.data, location_id, currentPage: 1 });
//     // }


//     // // User clicks on cuisine check-box this function will execute.
//     // handleCuisineChange = async (value) => {
//     //     let tempArray = this.state.cuisine_id.slice();
//     //     if (tempArray.indexOf(value) === -1) {
//     //         tempArray.push(value);
//     //     } else {
//     //         tempArray.splice(tempArray.indexOf(value), 1);
//     //     }

//     //     const { sort, mealtype_id, location_id, lcost, hcost } = this.state;
//     //     // Loading the all values in payload.
//     //     const inputObj = {
//     //         sort: sort,
//     //         mealtype_id: mealtype_id,
//     //         location_id: location_id,
//     //         lcost: lcost,
//     //         hcost: hcost,
//     //         cuisine_id: tempArray.length > 0 ? tempArray : undefined
//     //     }
//     //     // Making the api call to fetch the cuisine based restaurant data.
//     //     const restuarant = await axios({
//     //         method: 'POST',
//     //         url: 'http://localhost:8900/filter',
//     //         headers: { 'Content-Type': 'application/json' },
//     //         data: inputObj
//     //     });
//     //     // Once get the data, then update restaurant, cuisne id and page number in 1.
//     //     this.setState({ restuarant: restuarant.data, cuisine_id: tempArray, currentPage: 1 });
//     // }
//     // handleSort = async (sort) => {
//     //     const { mealtype_id, location_id, lcost, hcost, cuisine_id } = this.state;
//     //     // loading the values in payload
//     //     const inputObj = {
//     //         sort: sort,
//     //         mealtype_id: mealtype_id,
//     //         location_id: location_id,
//     //         lcost: lcost,
//     //         hcost: hcost,
//     //         // if cuisine_id is empty array, this function willn't work so set the value as undefined.
//     //         cuisine_id: cuisine_id && cuisine_id.length > 0 ? cuisine_id : undefined
//     //     }
//     //     // Making api call to sorting data.
//     //     const restuarant = await axios({
//     //         method: 'POST',
//     //         url: 'http://localhost:8900/filter',
//     //         headers: { 'Content-Type': 'application/json' },
//     //         data: inputObj
//     //     })
//     //     // Once get the data, then update restaurant, sort and page number as 1.
//     //     this.setState({ restuarant: restuarant.data, sort, currentPage: 1 })
//     // }


//     // // User clicks the cost  button this function will execute.
//     // handleCost = async (lcost, hcost) => {
//     //     const { sort, mealtype_id, location_id, cuisine_id } = this.state;
//     //     // loading all values in payload.
//     //     const inputObj = {
//     //         sort: sort,
//     //         mealtype_id: mealtype_id,
//     //         location_id: location_id,
//     //         lcost: lcost,
//     //         hcost: hcost,
//     //         // if cuisine_id is empty array, this function willn't work so set the value as undefined.
//     //         cuisine_id: cuisine_id && cuisine_id.length > 0 ? cuisine_id : undefined

//     //     }
//     //     // making api call to get expected cost based restaurant data.
//     //     const restuarant = await axios({
//     //         method: 'POST',
//     //         url: 'http://localhost:8900/filter',
//     //         headers: { 'Content-Type': 'application/json' },
//     //         data: inputObj
//     //     });
//     //     // Once get the data, then update restaurant, lcost, hcost and page number in 1.
//     //     this.setState({ restuarant: restuarant.data, lcost, hcost, currentPage: 1 });
//     // }
//     // handlePrev = () => {
//     //     this.setState({ currentPage: this.state.currentPage - 1 });
//     // }
//     // handleNext = () => {
//     //     this.setState({ currentPage: this.state.currentPage + 1 });
//     // }

//     // handleClickPage = (event) => {
//     //     this.setState({ currentPage: Number(event.target.id) })
//     // }
//     // handleViewRestaurant = (id) => {
//     //     this.props.history.push(`/details?restaurants=${id}`)
//     // }
//     render() {
//         const { restuarant,  currentPage, itemsPerPage } = this.state;
//         const lastIndex = currentPage * itemsPerPage
//         const firstIndex = lastIndex - itemsPerPage
//         const currentRestaurant = restuarant.slice(firstIndex, lastIndex)
//         let result = currentRestaurant && currentRestaurant.length > 0 ? currentRestaurant.map(item => {
//             return <div class="details-panel" onClick={() => this.handleViewRestaurant(item._id)}>
//                 <div class="row upperSection">
//                     <div className="col-xs-12 col-sm-4 col-lg-2">
//                         <img src={item.thumb} className="detailsImage" />
//                     </div>
//                     <div className="col-xs-12 col-sm-8 col-lg-10">
//                         <h4 class="detailsHeading">{item.name}</h4>
//                         <h4 class="detailsSubHeading">{item.locality}</h4>
//                         <h5 class="detailsAddress">{item.address}</h5>
//                     </div>
//                 </div>
//                 <hr className="details-hrLine" />


//                 <div class="row lowerSection">
//                     <div className="col-2">
//                         <h5 class="cuisines">CUISINES:</h5>
//                         <h5 class="cost-for-two">COST FOR TWO:</h5>
//                     </div>
//                     <div className="col-10">
//                         <h5 class="bakery">{item.cuisine_id.map(CuisineItem => CuisineItem.name).join(" , ")}</h5>
//                         <h5 class="rupees">{item.cost}</h5>
//                     </div>
//                 </div>


//             </div>

//         }) : <div className="no-records">No Records found</div>

//         // const pageNumbers = [];
//         // for (let i = 1; i <= Math.ceil(restuarant.length / itemsPerPage); i++) {
//         //     pageNumbers.push(i);
//         // }

//         // let prevButton;
//         // if (pageNumbers.length === 1) {
//         //     prevButton = <li style={{ display: 'inline-block', margin: '8px', fontSize: '20px' }}><a href="#" >Prev</a></li>
//         // }
//         // if (pageNumbers.length > 1) {
//         //     prevButton = <li style={{ display: 'inline-block', margin: '8px', fontSize: '20px' }}><a href="#" onClick={this.handlePrev}>{`<`}</a></li>
//         // }
//         // if (currentPage === 1 && pageNumbers.length > 1) {
//         //     prevButton = <li style={{ display: 'inline-block', margin: '8px', fontSize: '20px' }}><a >{`<`}</a></li>
//         // }

//         // let nextButton;
//         // if (pageNumbers.length === 1) {
//         //     nextButton = <li style={{ display: 'inline-block', margin: '8px', fontSize: '20px' }}><a href="#" >Next</a></li>
//         // }
//         // if (pageNumbers.length > 1) {
//         //     nextButton = <li style={{ display: 'inline-block', margin: '8px', fontSize: '20px' }}><a href="#" onClick={this.handleNext}>{`>`}</a></li>
//         // }
//         // if (currentPage === pageNumbers.length && pageNumbers.length > 1) {
//         //     nextButton = <li style={{ display: 'inline-block', margin: '8px', fontSize: '20px' }} ><a >{`>`}</a></li>
//         // }

//         // let renderPageNumbers = pageNumbers.map(number => {
//         //     return (
//         //         <li key={number} style={{ display: 'inline-block', margin: '8px', fontSize: '20px' }}>
//         //             <a style={currentPage === number ? { background: '#192f60', color: '#fff' } : {}} href="#" id={number} onClick={this.handleClickPage}>{number}</a>
//         //         </li>
//         //     )
//         // })

//         return (
//             <div className="container">
//                 <div className="row filterpage-heading">{this.state.option} places in Mumbai</div>
//                 <div className="row">
//                     <div className="col-sm-12 col-md-4 col-lg-3">
//                         <div className="filter-panel">
//                             <div className="filter-text">Filter</div>
//                             <div className="filter-subheading">Select Location</div>
//                             <select className="location-box" onChange={this.handleLocationChange}>
//                                 <option value="0">select</option>
//                                 {this.state.location.map((item) => {
//                                             return <option value={item.location_id}>{item.name}</option>
//                                         })}
//                             </select>
//                             <div className="filter-subheading">Cuisine</div>
//                             <input type="checkbox" className="cuisineOption" onChange={() => this.handleCuisineChange(1)} /><label>North Indian</label><br />
//                             <input type="checkbox" className="cuisineOption" onChange={() => this.handleCuisineChange(2)} /><label>South Indian</label><br />
//                             <input type="checkbox" className="cuisineOption" onChange={() => this.handleCuisineChange(3)} /><label>Chinese</label><br />
//                             <input type="checkbox" className="cuisineOption" onChange={() => this.handleCuisineChange(4)} /><label>Fast Food</label><br />
//                             <input type="checkbox" className="cuisineOption" onChange={() => this.handleCuisineChange(5)} /><label>Street Food</label><br />
//                             <div className="filter-subheading">Cost for two</div>
//                             <input type="radio" name="cost" className="cuisineOption" onChange={() => this.handleCost(1, 500)} /><label>less than &#8377;500</label><br />
//                             <input type="radio" name="cost" className="cuisineOption" onChange={() => this.handleCost(500, 1000)} /><label>&#8377;500 to &#8377;1000</label><br />
//                             <input type="radio" name="cost" className="cuisineOption" onChange={() => this.handleCost(1000, 1500)} /><label>&#8377;1000 to &#8377;1500</label><br />
//                             <input type="radio" name="cost" className="cuisineOption" onChange={() => this.handleCost(1500, 2000)} /><label>&#8377;1500 &#8377;2000</label><br />
//                             <input type="radio" name="cost" className="cuisineOption" onChange={() => this.handleCost(2000, 2500)} /><label>&#8377;2000+</label><br />
//                             <div className="filter-subheading">Sort</div>
//                             <input type="radio" name="sort" className="cuisineOption" onChange={() => this.handleSort(1)} /><label>Price low to high</label><br />
//                             <input type="radio" name="sort" className="cuisineOption" onChange={() => this.handleSort(-1)} /><label>Price high to low</label><br />
//                         </div>
//                     </div>
//                     <div className="col-sm-12 col-md-8 col-lg-9">

//                         <div>
//                             {result}
//                         </div>

//                         {restuarant.length > 0 ?
//                             <ul class="pagination">
//                                 {/* {prevButton}
//                                 {renderPageNumbers}
//                                 {nextButton} */}

//                             </ul> : null}

//                         {/* {restaurants.length > 0 ? restaurants.map((item) => {
//                             return <div className="details-panel" onClick={()=>this.handleViewRestaurant(item._id)}>
//                                 <div className="row upperSection">
//                                     <div className="col-xs-12 col-sm-4 col-lg-2">
//                                         <img src="./assets/dinner.jpg" className="detailsImage" alt="kfc" />
//                                     </div>
//                                     <div className="col-xs-12 col-sm-8 col-lg-10">
//                                         <div className="detailsHeading">{item.name}</div>
//                                         <div className="detailsSubHeading">{item.locality}</div>
//                                         <div className="detailsAddress">{item.address}</div>
//                                     </div><hr className="details-hrLine" />
//                                 </div>
//                                 <div className="row lowerSection">
//                                     <div className="col-2">
//                                         <div className="detailsCuisine">Cuisine:</div>
//                                         <div className="detailsCuisine">Cost for two:</div>
//                                     </div>
//                                     <div className="col-10">
//                                         <div className="detailsCuisineValue">{item.cuisine_id.map((cuis) => cuis.name)}</div>
//                                         <div className="detailsCuisineValue">&#8377;{item.cost}</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         }) : <div className="no-records">No Records Found...</div>} */}

//                         {/* <div className="details-panel">
//                             <div className="row upperSection">
//                                 <div className="col-xs-12 col-sm-4 col-lg-2">
//                                     <img src="./assets/dinner.jpg" className="detailsImage" alt="kfc" />
//                                 </div>
//                                 <div className="col-xs-12 col-sm-8 col-lg-10">
//                                     <div className="detailsHeading">The Big Chill Cakery</div>
//                                     <div className="detailsSubHeading">FORT</div>
//                                     <div className="detailsAddress">Shop 1, Plot D, Samruddhi Complex, Chincholi,Mumbai- 400002, Maharashtra.</div>
//                                 </div><hr className="details-hrLine" />
//                             </div>
//                             <div className="row lowerSection">
//                                 <div className="col-2">
//                                     <div className="detailsCuisine">Cuisine:</div>
//                                     <div className="detailsCuisine">Cost for two:</div>
//                                 </div>
//                                 <div className="col-10">
//                                     <div className="detailsCuisineValue">Bakery</div>
//                                     <div className="detailsCuisineValue">&#8377;700</div>
//                                 </div>
//                             </div>

//                         </div> */}

//                         {/* {restaurants.length > 0 ?
//                             <div className="pagination">
//                                 <button className="pagination-button">prev</button>
//                                 <button className="pagination-button">1</button>
//                                 <button className="pagination-button">2</button>
//                                 <button className="pagination-button">3</button>
//                                 <button className="pagination-button">4</button>
//                                 <button className="pagination-button">5</button>
//                                 <button className="pagination-button">next</button>
//                             </div> : null} */}
//                     </div>
//                 </div>
//             </div>

//         )
//     }

// }

// export default withRouter(Filter);










// // import React from "react";
// // import "./styles/filter.css";
// // // import img from "./Images/breakfast.webp";
// // // import img1 from "./Images/img5.jpg";
// // import image1 from "./Images/breakfast.webp";
// // import image2 from "./Images/img5.jpg";
// // import axios from "axios";
// // import queryString from "query-string";
// // import Navbar from "./navbar";

// // class Filter extends React.Component{
// //     constructor(){
// //         super();
// //         this.state={
// //             restuarant:[],
// //             meal_type:undefined,
// //             location_id:undefined,
// //             option:"",
// //             currentPage: 1,           // This is current page which default value is 1.
// //             itemsPerPage: 2,  
// //             sort: 1,                 // This is sort value. if (1) = Ascending order , (-1) = Descending order.
// //             cuisine_id: [],          // This is cuisine_id. Initially empty array.
// //             lcost: undefined,        // This is minimum price for restaurant.
// //             hcost: undefined,        // This is maximum price for restaurant.
// //             location: []     
// //         }
// //     }
// //     componentDidMount = async () => {
// //         // Get the values from query string which is coming from homepage.
// //         const qs = queryString.parse(this.props.location.search);
// //         const location = qs.location;
// //         const mealtypes = Number(qs.mealtypes);
// //         const mealtype_name = qs.mealtype_name;

// //         this.setState({ option: mealtype_name });
// //         // Declare the locations and mealtypes value in payload.
// //         const inputObj = {
// //             location_id: location,
// //             meal_type: mealtypes
// //         }

// //         // Making api call to fetch the restaurant data based on payload.
// //         const restuarant = await axios({
// //             method: 'POST',
// //             url: 'http://localhost:2000/filter',
// //             headers: { 'Content-Type': 'application/json' },
// //             data: inputObj
// //         })
// //         // once get the value then update the state variable.
// //         this.setState({ restuarant: restuarant.data, meal_type: mealtypes, location_id: location });

// //         // Making api call for locations data to showing drop-downs filters.
// //         const locationDD = await axios({
// //             method: 'GET',
// //             url: 'http://localhost:2000/location',
// //             headers: { 'Content-Type': 'application/json' }
// //         });
// //         // Update the location variable in state.
// //         this.setState({ location: locationDD.data });
// //     }
// //     render(){
        
// //         return(
// //         <div className="fluid">
// //             <Navbar/>
// //             {/* <div id="one">
// //             <h2 className="logo">e!</h2>
// //             <p className="p1">Login<button className="but2">Create an account</button></p>
// //             </div> */}
// //            <h2 id="head1">Breakfast Places in Mumbai</h2>
          
           
// //            <div id="container1">
// //             <div id="filter">
// //                 <h3>Filters</h3>
// //                 <h2 className="sort"> / sort</h2>
// //                 <h4>Select Location</h4>
// //                 <form>
// //                 <input type="text" list="location"  placeholder="Select Location" className="location"/>
// //                 <datalist id="location">
// //                     <option>Delhi</option>
// //                     <option>Mumbai</option>
// //                     <option>Chennai</option>
// //                     <option>Banglore</option>
// //                     <option>Calcutta</option>
// //                     <option>Coimbatore</option>
// //                 </datalist>
// //                 <p><b>Cuisine</b></p>

// //                <input type="checkbox" />North Indian<br/>
// //                 <input type="checkbox"/>South Indian<br/>
// //                 <input type="checkbox"/>Chinese<br/>
// //                 <input type="checkbox"/>Fast Food<br/>
// //                 <input type="checkbox"/>Street Food
// //                 <p><b>Cost for two</b></p>
// //                 <input type="radio" name="cost"/>Less than &#8377;500<br/>
// //                 <input type="radio" name="cost"/> &#8377;500 to  &#8377;1000<br/>
// //                 <input type="radio" name="cost"/> &#8377;1000 to  &#8377;1500<br/>
// //                 <input type="radio" name="cost"/> &#8377;1500 to  &#8377;2000<br/>
// //                 <input type="radio" name="cost"/> &#8377;2000 +<br/>
// //                 <p><b>Sort</b></p>
// //                 <input type="radio" name="price"/>Price High to Low<br/>
// //                 <input type="radio" name="price"/>Price Low to High<br/>
// //                 </form>
            
// //             </div>
// //             <div id="filter2">
// //                 <input type="text " list="sort" placeholder="Filter / Sort" className="location2"/>
// //                 <datalist id="sort">
// //                     <option>Delhi</option>
// //                     <option>Mumbai</option>
// //                     <option>Chennai</option>
// //                     <option>Banglore</option>
// //                     <option>Calcutta</option>
// //                     <option>Coimbatore</option>
// //                 </datalist>
// //             </div>
// //             <div id="container2">
// //                 <div className="box">
// //                   <img src={image1}alt="" className="filterimg"/>
// //                   <div className="inside">
// //                     <h4>The Big Chill Cakery</h4>
// //                     <h5>Fort</h5>
// //                     <p className="p2">Shop 1, Plot D, Samruddhi Complex, Chincholi...</p>
// //                   </div>
// //                   <hr/>
// //                   <p>CUISINES     :<b>Bakery</b></p>
// //                   <p>COST FOR TWO:<b>&#8377;700</b></p>
// //                 </div>
// //                 <div className="box">
// //                     <img src={image2}alt="" className="filterimg"/>
// //                     <div className="inside">
// //                         <h4>The Bake Shop</h4>
// //                         <h5>Fort</h5>
// //                         <p className="p2">Shop 1, Plot D, Samruddhi Complex, Chincholi...</p>
// //                     </div>
// //                       <hr/>
// //                       <p>CUISINES   :<b>Bakery</b></p>
// //                       <p>COST FOR TWO:<b>&#8377;700</b></p>
// //                 </div>
// //                 <div id="button">
// //                     <button className="btn2">&#60;</button>
// //                     <button className="btn2">1</button>
// //                     <button className="btn2">2</button>
// //                     <button className="btn2">3</button>
// //                     <button className="btn2">4</button>
// //                     <button className="btn2">5</button>
// //                     <button className="btn2">&#62;</button>
// //                 </div>
// //             </div> 
// //           </div>
// //         </div>
// //         )
// //     }
// // }
// // export default Filter;






// // import React from "react";
// // import "./styles/filter.css";

// // import img from "./Images/breakfast.webp";
// // import img1 from "./Images/img5.jpg";
// // class Filter extends React.Component{
// //     render(){
// //         return(
// //             <div className="full">         
// //                  {/* <div id="color">
// //         <h2 className="filterlogo">e!</h2>
// //         <p className="login">Login</p>
// //         <button className="create"> Create an account</button>
// //     </div> */}
// //    <h1 id="h">Breakfast places in Mumbai</h1>
// //    <div className="container">
// //     <div className="filter">
// //         <h2>Filters</h2>
// //         <h3>Select Location</h3>
// //         <input type="text" list="cities" placeholder="Select Location"/>
// //         <datalist id="cities">
// //            <option>Chennai </option>
// //            <option>Mumbai</option>
// //            <option>Delhi</option>
// //            <option>Kolkata</option>
// //        </datalist>
// //     <p><b>Cusine</b></p>
// //        <input type="checkbox"/> North Indian <br/>
// //        <input type="checkbox"/>South Indian<br/>
// //        <input type="checkbox"/>Chinese<br/>
// //        <input type="checkbox"/>Fast Food<br/>
// //        <input type="checkbox"/>Street Food<br/>
// //     <p><b>Cost For two</b></p>
// //        <input type="radio" name="cost"/> Less than &#8377;500<br/> 
// //        <input type="radio"name="cost"/>&#8377;500 to &#8377;1000<br/> 
// //        <input type="radio"name="cost"/>&#8377;1000 to &#8377;1500<br/> 
// //        <input type="radio"name="cost"/>&#8377;1500 to &#8377;2000<br/> 
// //        <input type="radio"name="cost"/>&#8377;2000 and above<br/> 
// // <p><b>Sort</b></p>
// //        <input type="radio" name="price"/>Low to High<br/>
// //        <input type="radio" name="price"/>  High to Low<br/>
// //         </div>
// //         <div className="filter2">
// //             <input type="text" list="cities"  placeholder="Filter/Sort"/>
// //         <datalist id="cities">
// //            <option>Chennai </option>
// //            <option>Mumbai</option>
// //            <option>Delhi</option>
// //            <option>Kolkata</option>
// //        </datalist>

// //         </div>
// //         <div id="container2">
// //             <div className="box1">
// //             <img className="s"src={img} alt=""/> 
// //             <div className="text" >
// //             <p><b>The Big chill cakery</b></p>
// //                <h2>Fort</h2> 
// //                <p>shop1,plot D,Samruddhi Complex,Chincholi</p>
// //             </div>
// //             <hr/>    
        
// //   <p>  Cusines      :<b>Backery</b></p>
// //     <p>Cost of two :<b>&#8377;700</b></p>
             
         

// //         </div>

// //             <div className="box2">
// //             <img className="ss" src={img1} alt=""/>
// //             <div className="text1" >
// //             <p> <b>The Bake shop</b> </p>
// //                <h2>Fort</h2> 
// //                <p>shop1,plot D,Samruddhi Complex,Chincholi</p>
// //             </div>
// //             <hr/>
            
// //   <p>  Cusines  :<b>Backery</b></p>
// //     <p>Cost of two :<b>&#8377;700</b></p>
             
// //             </div>
// //              <div className="pageno">
// //             <button>&#60;</button>
// //             <button>1</button>
// //             <button>2</button>
// //             <button>3</button>
// //             <button>4</button>
// //             <button>5</button>
// //             <button>&#62;</button>
// // </div>
// //         </div>
    
    
// //     </div>
// //     </div>

// //         )
// //     }

// // }

// // export default Filter;

import React from "react";
import "./styles/filter.css";
// import image1 from "./images/meal2.jpg";
// import image2 from "./images/meal3.jpg";
import Header from "./Header";
import Logo from "./logo";
import axios from "axios";
import queryString from "query-string";
// import axios from "axios";
// import queryString from "query-string";
class Filter extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         restuarant:[],
    //         mealtype_id:undefined,
    //         location_id:undefined,
    //         option:""
    //     }
    // }
    // componentDidMount = async () => {
    //     // Get the values from query string which is coming from homepage.
    //     const qs = queryString.parse(this.props.location.search);
    //     const location = qs.location;
    //     const mealtype = Number(qs.mealtype);
    //     const mealtype_name = qs.mealtype_name;

    //     this.setState({ option: mealtype_name });
    //     // Declare the locations and mealtypes value in payload.
    //     const inputObj = {
    //         location_id: location,
    //         mealtype_id: mealtype
    //     }

    //     // Making api call to fetch the restaurant data based on payload.
    //     const restuarant = await axios({
    //         method: 'POST',
    //         url: 'http://localhost:2000/filter',
    //         headers: { 'Content-Type': 'application/json' },
    //         data: inputObj
    //     })
    //     // once get the value then update the state variable.
    //     this.setState({ restuarant: restuarant.data, mealtype_id: mealtype, location_id: location });

    //     // Making api call for locations data to showing drop-downs filters.
    //     const locationDD = await axios({
    //         method: 'GET',
    //         url: 'http://localhost:2000/location',
    //         headers: { 'Content-Type': 'application/json' }
    //     });
    //     // Update the location variable in state.
    //     this.setState({ location: locationDD.data });
    // }
    constructor(){
        super();
        this.state={
            locations:[],
            restaurants:[]
        }
    }
    componentDidMount(){
        const qs=queryString.parse(this.props.location.search);
        const {mealtype_id} = qs;
        const filterObj={
            mealtype:Number(mealtype_id)
        }
        axios({
            method:"GET",
            url:"http://localhost:2000/location",
            headers:{"Content-Type":"application/json"}
        })
        .then(response=>{
            this.setState({locations:response.data});
        })
        .catch(err=>console.log(err));
        axios({
            method:"POST",
            url:"http://localhost:2000/filter",
            headers:{"Content-Type":"application/json"},
            data:filterObj
        })
        .then(response=>{
            this.setState({ restaurants:response.data});
        })
        .catch(err=>console.log(err));
    }
    render(){
        const {locations, restaurants}=this.state;
        return(
        <div className="fluid">
           
        <div  style={{backgroundColor:"red"}}>
                <Logo/>
                <Header />
            </div>
           <h2 id="head1">Breakfast Places in Mumbai</h2>
           <div id="container1">
            <div id="filter">
                <h3>Filters</h3>
                <h2 className="sort"> / sort</h2>
                <h4>Select Location</h4>
                <form>
                <input type="text" list="location"  placeholder="Select Location" className="location"/>
                <datalist id="location">
                {locations.map((item)=>{
          return <option >{`${item.name}, ${item.city}`}</option>;
         })}
                </datalist>
                <p><b>Cuisine</b></p>

               <input type="checkbox" />North Indian<br/>
                <input type="checkbox"/>South Indian<br/>
                <input type="checkbox"/>Chinese<br/>
                <input type="checkbox"/>Fast Food<br/>
                <input type="checkbox"/>Street Food
                <p><b>Cost for two</b></p>
                <input type="radio" name="cost"/>Less than &#8377;500<br/>
                <input type="radio" name="cost"/> &#8377;500 to  &#8377;1000<br/>
                <input type="radio" name="cost"/> &#8377;1000 to  &#8377;1500<br/>
                <input type="radio" name="cost"/> &#8377;1500 to  &#8377;2000<br/>
                <input type="radio" name="cost"/> &#8377;2000 +<br/>
                <p><b>Sort</b></p>
                <input type="radio" name="price"/>Price High to Low<br/>
                <input type="radio" name="price"/>Price Low to High<br/>
                </form>
            
            </div>
            <div id="filter2">
                <input type="text " list="sort" placeholder="Filter / Sort" className="location2"/>
                <datalist id="sort">
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Chennai</option>
                    <option>Banglore</option>
                    <option>Calcutta</option>
                    <option>Coimbatore</option>
                </datalist>
            </div>
            <div id="container2">
                { restaurants.length >0 ? restaurants.map((item)=>{
                        return   <div className="box">
                        <img src={`./${item.image}`}alt="" className="filterimg"/>
                        <div className="inside">
                          <h4>{item.name}</h4>
                          <h5>{item.locality}</h5>
                          <p className="p2">{item.city}</p>
                        </div>
                        <hr/>
                        <p>CUISINES     :<b>{item.cuisine.map(ele=>`${ele.name} `)}</b></p>
                        <p>COST FOR TWO:<b>&#8377;{item.min_price}</b></p>
                      </div>
                }):<div>No Records found ....</div>}
                {restaurants.length>0 ?
                <div id="button">
                    <button className="btn2">&#60;</button>
                    <button className="btn2">1</button>
                    <button className="btn2">2</button>
                    <button className="btn2">3</button>
                    <button className="btn2">4</button>
                    <button className="btn2">5</button>
                    <button className="btn2">&#62;</button>
                </div>:null
    }
            </div> 
          </div>
        </div>
        )
    }
}
export default Filter;
