import React from 'react';

function Map() {
  return (
    <div className="google-map">
      <iframe
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382.482825404447!2d39.78825908458124!3d21.379229260053933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21a907f21a74b%3A0x4b2f0cce886135d7!2z2KfZhNij2YbYr9mE2LPZitipINiz2YbYqtix!5e0!3m2!1sen!2ssa!4v1720626201726!5m2!1sen!2ssa"
      ></iframe>
    </div>
  );
}

export default Map;
