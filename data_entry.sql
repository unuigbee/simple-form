-- phpMyAdmin SQL Dump
-- version 4.6.0
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 04, 2016 at 12:35 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `data_entry`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_entry`
--

CREATE TABLE `data_entry` (
  `id` int(11) UNSIGNED NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telephone` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `comments` text,
  `more_comments` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `data_entry`
--

INSERT INTO `data_entry` (`id`, `firstname`, `surname`, `email`, `telephone`, `gender`, `comments`, `more_comments`) VALUES
(27, 'Emmanuel', 'Unuigbe', 'eunuigbee@gmail.com', '07939677156', 'male', 'SADasdsadsadasdasdasdasddsddasdasddasdasdsadasdasdasdasdasdasda', 'dsadsadsadasdasdasdasdasdasdasdasdasdsadas'),
(28, 'Emmanuel', 'Unuigbe', 'eunuigbee@gmail.com', '07939677156', 'male', 'Good day mate', 'Nice Work Dude'),
(29, 'Emmanuel', 'Unuigbe', 'eunuigbee@gmail.com', '07939677156', 'female', 'Good day sir', 'Lovely day man'),
(30, 'Emmanuel', 'Unuigbe', 'eunuigbee@gmail.com', '07939677156', 'male', 'David and goliath who needs', 'When the hens quack'),
(31, 'Emmanuel', 'Unuigbe', 'eunuigbee@gmail.com', '07939677156', 'male', 'sadsadsadasdasdsadas', 'dasdasdasdasdsadasdasdasdasd'),
(32, 'Emmanuel', 'Unuigbe', 'eunuigbee@gmail.com', '07939677156', 'male', 'ddsdsadsadasdasdasdsadasdsadc', 'dsadsadasdasdsdsadasdasdasdsadasdasdasdas'),
(33, 'Emmanuel', 'Unuigbe', 'eunuigbee@gmail.com', '07939677156', 'male', 'dasdasdasdsadasdas', 'dsadasdsadsadasdasdasdasd'),
(34, 'Emmanuel', 'Unuigbe', 'eunuigbee@gmail.com', '07939677156', 'male', 'Damien I love is my name ', 'dasdasdasdas'),
(35, 'Emmanuel', 'Unuigbe', 'eunuigbee@gmail.com', '07939677156', 'male', 'dsad', 'dasdasdsadasda'),
(36, 'Emmanuel', 'Unuigbe', 'eunuigbee@gmail.com', '07939677156', 'male', 'dsadasdsadas', 'dsadasdsadsadas'),
(37, 'Emmanuel', 'Unuigbe', 'eunuigbee@gmail.com', '07939677156', 'male', 'Danger stranger', 'Danger stranger mayber');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `version` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`version`) VALUES
(1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_entry`
--
ALTER TABLE `data_entry`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_entry`
--
ALTER TABLE `data_entry`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
