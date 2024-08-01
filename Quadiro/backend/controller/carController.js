const Car = require('../models/carModel');

exports.addCar = async (req, res) => {
  try {
    const { carName, manufacturingYear, price } = req.body;
    const newCar = new Car({ carName, manufacturingYear, price });
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    console.log(req.params.id)
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCarStats = async (req, res) => {
  try {
    const totalCars = await Car.countDocuments();
    const carsLast10Years = await Car.countDocuments({
      manufacturingYear: { $gte: new Date().getFullYear() - 10 },
    });
    const carsLast20Years = await Car.countDocuments({
      manufacturingYear: { $gte: new Date().getFullYear() - 20 },
    });
    const cars50k = await Car.countDocuments({
      price: { $gte: 0, $lt: 50000 },
    });
    const carsu50k = await Car.countDocuments({
      price: { $gte: 50000 },
    });

    res.json({
      totalCars,
      carsLast10Years,
      carsLast20Years,
      cars50k,
      carsu50k,
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
