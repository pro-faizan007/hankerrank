import React from 'react';
import { STUDENTS } from '../studentsList';
import ResidentsList from './ResidentsList';
import Error from './Error';

function Search(props) {
	const checkValidity = (joiningDate, validityDate) => {
		const now = new Date();
		const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
		const [year, month, day] = joiningDate.split('-');
		const [yyyy, mm, dd] = validityDate.split('-');
		const maxValid = new Date(yyyy, mm - 1, dd);
		const selected = new Date(year, month - 1, day);
		return maxValid >= selected && maxValid >= today;
	};

	const studentNameRef = React.useRef(null);
	const joiningDateRef = React.useRef(null);
	const [addedStudents, setAddedStudents] = React.useState([]);

	const handleAddButtonClick = () => {
		const studentName = studentNameRef.current.value;
		const joiningDate = joiningDateRef.current.value;

		const student = STUDENTS.find((s) => s.name === studentName);
		if (student && checkValidity(joiningDate, student.validityDate)) {
			setAddedStudents((prevStudents) => [...prevStudents, student]);
		}
	};

	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">
				Student Name:
				<div>
					<input
						id="studentName"
						data-testid="studentName"
						type="text"
						className="mr-30 mt-10"
						ref={studentNameRef}
					/>
				</div>
			</label>
			<label htmlFor="joiningDate">
				Joining Date:
				<div>
					<input
						id="joiningDate"
						data-testid="joiningDate"
						type="date"
						className="mr-30 mt-10"
						ref={joiningDateRef}
					/>
				</div>
			</label>
			<button type="button" data-testid="addBtn" className="small mb-0" onClick={handleAddButtonClick}>
				Add
			</button>



			{studentNameRef.current && !addedStudents.some((student) => student.name === studentNameRef.current.value) && (
				<Error studentName={studentNameRef.current.value} />
			)}
			<div className='faizan'>
				<h1>ResidentsList</h1>
				{addedStudents.length > 0 && <ResidentsList students={addedStudents} />}
			</div>
		</div>
	);
}

export default Search;
