import { useState } from "react";
import './seats.css';

const SeatSelector = ({ selectedSeats, disabledSeats, onSeatSelect }) => {
  const [seats, setSeats] = useState([
    { id: 1, selected: false },
    { id: 2, selected: false },
    { id: 3, selected: false },
    { id: 4, selected: false },
    { id: 5, selected: false },
    { id: 6, selected: false },
    { id: 7, selected: false },
    { id: 8, selected: false },
    { id: 9, selected: false },
    { id: 10, selected: false }
  ]);

  const handleClick = (id) => {
    const updatedSeats = seats.map((seat) =>
      seat.id === id ? { ...seat, selected: !seat.selected } : seat
    );
    setSeats(updatedSeats);
    onSeatSelect(updatedSeats.filter((seat) => seat.selected).map((seat) => seat.id));
  };

  return (
    <section>
      <div className="container">
        <div className="inside-container row">
          {seats.map((seat) => (
            <div className="col-md-4" key={seat.id}>
              <div class="main-seat"
                className={`seat ${seat.selected ? "selected" : ""} ${disabledSeats.includes(seat.id) ? "disabled" : ""
                  }`}
                onClick={() => !disabledSeats.includes(seat.id) && handleClick(seat.id)}>
                <div class="seats">
                  {seat.id}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeatSelector;
