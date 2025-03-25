const GoogleMap = ({ latitude = 0, longitude = 0}) => {
    return (
        <iframe src={`http://maps.google.com/maps?q=${latitude},${longitude}&z=5&output=embed`} height="400" width="100%"></iframe>
    );
  };
  
  export default GoogleMap;