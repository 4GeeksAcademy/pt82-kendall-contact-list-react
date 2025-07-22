import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import defaultProfileImg from "../assets/img/defaultPhoto.webp";

export const Home = () => {
	
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

	return (
		<div className="text-center mt-5 container">			
			<div>
				<h1>My Contact List</h1>
			</div>
			<div className="card">
				<div className="d-flex">
					<div className="mt-3 p-3">
						<h2>FirstName, LastName</h2>
						<br/>
						<img 
							src={defaultProfileImg}
							style={{width:"150px", borderRadius:"25%"}}
						/>
					</div>

					<div className="mt-5 p-4">
						<p>Address</p>
						<p>Phone</p>
						<p>Email</p>
					</div>
				</div>
				<div>
					<button>Button 1 Edit</button>
					<button>Button 2 Delete</button>
					<br/>
					<button onClick = {() =>
						navigate("/addcontact")}>
							Add Contact
					</button>
				</div>
			</div>
		</div>
	);
}; 