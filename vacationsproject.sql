-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2020 at 07:34 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacationsproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `vacationID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`id`, `userId`, `vacationID`) VALUES
(184, 2, 5),
(56, 2, 6),
(176, 2, 8),
(194, 2, 68),
(174, 2, 69),
(57, 3, 3),
(59, 3, 5),
(177, 3, 6),
(58, 3, 8),
(167, 3, 68),
(195, 3, 69),
(182, 4, 4),
(60, 4, 5),
(168, 4, 67),
(185, 5, 5),
(70, 5, 6),
(166, 5, 67),
(175, 5, 69),
(201, 6, 3),
(193, 6, 4),
(105, 6, 5),
(187, 6, 8),
(188, 6, 68),
(200, 6, 69),
(183, 7, 5),
(165, 7, 67),
(145, 7, 68),
(170, 7, 69),
(199, 39, 3),
(196, 39, 4),
(169, 39, 67),
(197, 39, 68),
(198, 39, 69),
(171, 40, 69);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `userName`, `password`, `isAdmin`) VALUES
(1, 'Shir', 'Dahan', 'shir', '12345', 1),
(2, 'Moshe', 'Misha', 'mosh', '11111', 0),
(3, 'Bill', 'Gates', 'Dollar Bill', 'microsoft', 0),
(4, 'James', 'Bond', '007', '007', 0),
(5, 'Beyonce', 'Knowles', 'Queen B', '22222', 0),
(6, 'Moran', 'Miran', 'mimi', '77777', 0),
(7, 'Avrahami', 'Tali', 'taltuli', '654321', 0),
(38, '33', '33', '33', '333333', 0),
(39, 'moran', 'atias', 'kiki', '12345', 0),
(40, 'ccc', 'ccc', 'ccc', 'ccccccc', 0),
(41, 'ddd', 'dddd', 'ddd', 'ddddd', 0),
(42, 'shirr', 'dahan', 'shirush', '222222', 0);

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `vacationId` int(11) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `destination` varchar(100) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `price` int(11) NOT NULL,
  `vacationImg` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`vacationId`, `description`, `destination`, `startDate`, `endDate`, `price`, `vacationImg`) VALUES
(3, 'Exotic vacation in mexico\'s most amazing beaches.', 'Mexico', '2020-07-01', '2020-07-15', 2000, 'mexico.jpg'),
(4, 'The ultimate vacation experience...', 'Vietnam', '2020-09-01', '2020-09-30', 1500, 'vietnam.jpg'),
(5, 'New Years in London - Come meet Santa...', 'London', '2020-12-30', '2021-01-04', 800, 'london.jpg'),
(6, 'Learn how to speak German from real Germans...', 'Berlin', '2020-09-01', '2020-09-30', 2500, 'berlin.jpg'),
(8, 'Morning walks in central park and not in Yarkon-park', 'New-York', '2021-03-29', '2021-04-10', 3000, 'newyork.jpg'),
(67, 'Eat yummy special cookies', 'Amsterdam', '2020-08-20', '2020-08-24', 500, 'amsterdam.jpg'),
(68, 'Visit most beautiful islands', 'Greece', '2020-09-17', '2020-09-20', 499, 'greece.jpg'),
(69, 'No place like this on earth', 'Sinai', '2020-10-04', '2020-10-10', 199, 'sinai.jpg'),
(86, 'Shopping trip in Europe!', 'Budapest', '2020-11-01', '2020-11-08', 750, 'budapest.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userId_vacationID` (`userId`,`vacationID`),
  ADD KEY `vacationID` (`vacationID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `userName` (`userName`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`vacationId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `followers`
--
ALTER TABLE `followers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=202;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `vacationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`),
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`vacationID`) REFERENCES `vacations` (`vacationId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
