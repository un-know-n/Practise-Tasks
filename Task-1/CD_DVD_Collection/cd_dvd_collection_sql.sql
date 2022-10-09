-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for cd_dvd_collection
CREATE DATABASE IF NOT EXISTS `cd_dvd_collection` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cd_dvd_collection`;

-- Dumping structure for table cd_dvd_collection.albums
CREATE TABLE IF NOT EXISTS `albums` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL DEFAULT '',
  `release` timestamp NOT NULL,
  `tracks_count` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cd_dvd_collection.albums: ~0 rows (approximately)
INSERT INTO `albums` (`id`, `name`, `release`, `tracks_count`) VALUES
	(1, 'Back in Black', '2017-10-09 13:28:26', 13),
	(2, 'The Bodyguard', '2018-06-09 13:28:45', 12),
	(3, 'The Dark Side of the Moon', '2014-07-06 09:25:28', 25);

-- Dumping structure for table cd_dvd_collection.audio_genres
CREATE TABLE IF NOT EXISTS `audio_genres` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `genre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cd_dvd_collection.audio_genres: ~0 rows (approximately)
INSERT INTO `audio_genres` (`id`, `genre`) VALUES
	(1, 'Rock'),
	(2, 'Heavy metal'),
	(3, 'Jazz'),
	(4, 'Electronic music'),
	(5, 'Country music');

-- Dumping structure for table cd_dvd_collection.audio_performers
CREATE TABLE IF NOT EXISTS `audio_performers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `age` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cd_dvd_collection.audio_performers: ~0 rows (approximately)
INSERT INTO `audio_performers` (`id`, `name`, `age`) VALUES
	(1, 'Paul', 21),
	(2, 'Bob', 23),
	(3, 'Brad', 20),
	(4, 'Travis', 24),
	(5, 'Flint', 25);

-- Dumping structure for table cd_dvd_collection.disks
CREATE TABLE IF NOT EXISTS `disks` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cd_dvd_collection.disks: ~0 rows (approximately)
INSERT INTO `disks` (`id`, `name`) VALUES
	(1, 'Music Collection'),
	(2, 'Films and Music'),
	(3, 'Action Films'),
	(4, 'Rock Music');

-- Dumping structure for table cd_dvd_collection.disks_films
CREATE TABLE IF NOT EXISTS `disks_films` (
  `disk_id` int unsigned NOT NULL,
  `film_id` int unsigned NOT NULL,
  PRIMARY KEY (`disk_id`,`film_id`),
  KEY `FK_disks_films_films` (`film_id`),
  CONSTRAINT `FK_disks_films_disks` FOREIGN KEY (`disk_id`) REFERENCES `disks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_disks_films_films` FOREIGN KEY (`film_id`) REFERENCES `films` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cd_dvd_collection.disks_films: ~0 rows (approximately)
INSERT INTO `disks_films` (`disk_id`, `film_id`) VALUES
	(2, 1),
	(3, 1),
	(3, 2),
	(2, 3),
	(3, 3);

-- Dumping structure for table cd_dvd_collection.disks_music
CREATE TABLE IF NOT EXISTS `disks_music` (
  `disk_id` int unsigned NOT NULL,
  `music_id` int unsigned NOT NULL,
  PRIMARY KEY (`disk_id`,`music_id`),
  KEY `FK_disks_music_music` (`music_id`),
  CONSTRAINT `FK_disks_music_disks` FOREIGN KEY (`disk_id`) REFERENCES `disks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_disks_music_music` FOREIGN KEY (`music_id`) REFERENCES `music` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cd_dvd_collection.disks_music: ~0 rows (approximately)
INSERT INTO `disks_music` (`disk_id`, `music_id`) VALUES
	(4, 1),
	(1, 2),
	(1, 3),
	(2, 3);

-- Dumping structure for table cd_dvd_collection.films
CREATE TABLE IF NOT EXISTS `films` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT '',
  `producer` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cd_dvd_collection.films: ~0 rows (approximately)
INSERT INTO `films` (`id`, `title`, `producer`) VALUES
	(1, 'Fantastic Beasts: The Secrets of Dumbledore', 'David Yates'),
	(2, 'Journey 2: The Mysterious Island', 'Brad Peyton'),
	(3, 'Tomorrowland: A World Beyond', 'Brad Bird');

-- Dumping structure for table cd_dvd_collection.film_actor
CREATE TABLE IF NOT EXISTS `film_actor` (
  `film_id` int unsigned NOT NULL,
  `actor_id` int unsigned NOT NULL,
  PRIMARY KEY (`film_id`,`actor_id`),
  KEY `FK_film_actor_video_performers` (`actor_id`),
  CONSTRAINT `FK_film_actor_films` FOREIGN KEY (`film_id`) REFERENCES `films` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_film_actor_video_performers` FOREIGN KEY (`actor_id`) REFERENCES `video_performers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cd_dvd_collection.film_actor: ~0 rows (approximately)
INSERT INTO `film_actor` (`film_id`, `actor_id`) VALUES
	(2, 1),
	(1, 2),
	(2, 3),
	(1, 4),
	(3, 4);

-- Dumping structure for table cd_dvd_collection.film_genre
CREATE TABLE IF NOT EXISTS `film_genre` (
  `film_id` int unsigned NOT NULL,
  `genre_id` int unsigned NOT NULL,
  PRIMARY KEY (`film_id`,`genre_id`),
  KEY `FK_film_genre_video_genres` (`genre_id`),
  CONSTRAINT `FK_film_genre_films` FOREIGN KEY (`film_id`) REFERENCES `films` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_film_genre_video_genres` FOREIGN KEY (`genre_id`) REFERENCES `video_genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cd_dvd_collection.film_genre: ~0 rows (approximately)
INSERT INTO `film_genre` (`film_id`, `genre_id`) VALUES
	(1, 1),
	(2, 1),
	(3, 1),
	(3, 5),
	(2, 7);

-- Dumping structure for table cd_dvd_collection.music
CREATE TABLE IF NOT EXISTS `music` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `performer_id` int unsigned NOT NULL,
  `album_id` int unsigned NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_music_albums` (`album_id`),
  KEY `FK_music_audio_performers` (`performer_id`),
  CONSTRAINT `FK_music_albums` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_music_audio_performers` FOREIGN KEY (`performer_id`) REFERENCES `audio_performers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cd_dvd_collection.music: ~3 rows (approximately)
INSERT INTO `music` (`id`, `performer_id`, `album_id`, `name`) VALUES
	(1, 2, 1, 'Stairway to Heaven'),
	(2, 5, 2, 'These Are the Days of Our Lives'),
	(3, 3, 2, 'Sweet Home Alabama');

-- Dumping structure for table cd_dvd_collection.music_genre
CREATE TABLE IF NOT EXISTS `music_genre` (
  `music_id` int unsigned NOT NULL,
  `genre_id` int unsigned NOT NULL,
  PRIMARY KEY (`genre_id`,`music_id`),
  KEY `FK_music_genre_music` (`music_id`),
  CONSTRAINT `FK_music_genre_audio_genres` FOREIGN KEY (`genre_id`) REFERENCES `audio_genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_music_genre_music` FOREIGN KEY (`music_id`) REFERENCES `music` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cd_dvd_collection.music_genre: ~4 rows (approximately)
INSERT INTO `music_genre` (`music_id`, `genre_id`) VALUES
	(1, 3),
	(2, 1),
	(2, 5),
	(3, 5);

-- Dumping structure for table cd_dvd_collection.video_genres
CREATE TABLE IF NOT EXISTS `video_genres` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `genre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cd_dvd_collection.video_genres: ~7 rows (approximately)
INSERT INTO `video_genres` (`id`, `genre`) VALUES
	(1, 'Action'),
	(2, 'Horror'),
	(3, 'Drama'),
	(4, 'Western'),
	(5, 'Science fiction'),
	(6, 'Thriller'),
	(7, 'Comedy');

-- Dumping structure for table cd_dvd_collection.video_performers
CREATE TABLE IF NOT EXISTS `video_performers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `age` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cd_dvd_collection.video_performers: ~0 rows (approximately)
INSERT INTO `video_performers` (`id`, `name`, `age`) VALUES
	(1, 'Liam', 26),
	(2, 'Noah', 23),
	(3, 'Oliver', 36),
	(4, 'Elijah', 33);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
