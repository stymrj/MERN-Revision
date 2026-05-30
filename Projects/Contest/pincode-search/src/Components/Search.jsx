import React, { useState, useEffect } from "react";

function Search() {
  const [pincode, setPincode] = useState("");
  const [postOffices, setPostOffices] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLookup = async () => {
    if (!pincode.trim()) {
      setError("Please enter a pincode");
      return;
    }

    if (pincode.length !== 6) {
      setError("Pincode should be 6 digits");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setPostOffices([]);
      setFilteredData([]);

      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );

      const result = await response.json();

      if (
        result[0].Status === "Error" ||
        !result[0].PostOffice
      ) {
        setError(result[0].Message);
        return;
      }

      setPostOffices(result[0].PostOffice);
      setFilteredData(result[0].PostOffice);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const filtered = postOffices.filter((office) =>
      office.Name.toLowerCase().includes(filter.toLowerCase())
    );

    setFilteredData(filtered);
  }, [filter, postOffices]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Enter Pincode</h1>

      <input
        type="text"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />

      <button onClick={handleLookup}>
        Lookup
      </button>

      {loading && <h2>Loading...</h2>}

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {postOffices.length > 0 && (
        <>
          <h2>
            Pincode: {pincode}
          </h2>

          <p>
            Message: Number of post offices found:
            {" "}
            {postOffices.length}
          </p>

          <input
            type="text"
            placeholder="Filter"
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
          />

          {filteredData.length === 0 ? (
            <p>
              Couldn't find the postal data
              you're looking for...
            </p>
          ) : (
            filteredData.map((office, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  margin: "10px 0",
                }}
              >
                <p>
                  <strong>Name:</strong>{" "}
                  {office.Name}
                </p>

                <p>
                  <strong>Branch Type:</strong>{" "}
                  {office.BranchType}
                </p>

                <p>
                  <strong>Delivery Status:</strong>{" "}
                  {office.DeliveryStatus}
                </p>

                <p>
                  <strong>District:</strong>{" "}
                  {office.District}
                </p>

                <p>
                  <strong>Division:</strong>{" "}
                  {office.Division}
                </p>

                <p>
                  <strong>State:</strong>{" "}
                  {office.State}
                </p>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
}

export default Search;