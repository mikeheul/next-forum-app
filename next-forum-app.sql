-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           5.7.33 - MySQL Community Server (GPL)
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour next-forum
CREATE DATABASE IF NOT EXISTS `next-forum` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `next-forum`;

-- Listage de la structure de la table next-forum. category
CREATE TABLE IF NOT EXISTS `category` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Category_name_key` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table next-forum.category : ~9 rows (environ)
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
	('11a4d725-a3fd-4c24-b020-22e7125747fe', 'Graphic Design', '2024-04-26 07:28:31.950', '2024-04-26 07:28:31.950'),
	('239ead62-dd2f-453a-9539-0e62067165a4', 'Accounting', '2024-04-26 07:28:31.950', '2024-04-26 07:28:31.950'),
	('3b7bfc48-249f-4f2c-b4e4-c87cbab5589a', 'Fitness', '2024-04-26 07:28:31.950', '2024-04-26 07:28:31.950'),
	('9c972bba-c2d0-4c36-b7ab-639201755659', 'Photography', '2024-04-26 07:28:31.950', '2024-04-26 07:28:31.950'),
	('9e82ea5d-aa5f-476c-b66d-882b1e0972ff', 'Web development', '2024-04-26 07:28:31.950', '2024-04-26 07:28:31.950'),
	('a7d6335e-fce1-426c-b011-d6c77586fc74', 'Engineering', '2024-04-26 07:28:31.950', '2024-04-26 07:28:31.950'),
	('b809d804-5282-428a-9d6f-a7861a728318', 'Filming', '2024-04-26 07:28:31.950', '2024-04-26 07:28:31.950'),
	('c605ff23-2f24-4276-9873-13907014df2c', 'Computer Science', '2024-04-26 07:28:31.950', '2024-04-26 07:28:31.950'),
	('e99eb48b-584b-4801-91f5-63cf11b580e8', 'Music', '2024-04-26 07:28:31.950', '2024-04-26 07:28:31.950');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

-- Listage de la structure de la table next-forum. post
CREATE TABLE IF NOT EXISTS `post` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `topicId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Post_topicId_idx` (`topicId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table next-forum.post : ~31 rows (environ)
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` (`id`, `message`, `userId`, `topicId`, `createdAt`, `updatedAt`) VALUES
	('0573e16b-ae10-4aef-a402-6a1cbedac723', '<p>Feel dangerous with Symfony 7! This tutorial teaches the fundamentals, the how and why while building a real-life web application.</p>', 'aaa', 'adc539f4-e32b-4b33-9a1b-8da19f0b4115', '2024-04-29 19:26:09.615', '2024-04-29 19:26:09.615'),
	('079736c4-1ed8-459c-b56d-b20450491fe4', '<p>When using client side rendering, it will fetch the icon component when it\'s needed. This will reduce the initial bundle size.</p>', 'aaa', 'e86769c8-188f-4df8-bffa-dc9de269b606', '2024-04-28 14:26:36.301', '2024-04-28 14:26:36.301'),
	('0a3119a3-73c2-43f4-8292-9604c6baf13a', '<p>I want you to feel dangerous with Symfony and love the process! In this tutorial, we get to learn the fundamentals of Symfony, build real stuff and learn the how and why behind how things work. And... we\'ll do it by building a space-themed site (because I\'m a sci-fi geek)</p>', 'aaa', 'adc539f4-e32b-4b33-9a1b-8da19f0b4115', '2024-04-29 19:26:37.568', '2024-04-29 19:26:37.568'),
	('2e6c3813-a7c9-4d18-aa61-c92cebf1a117', 'Debitis voluptas sapiente molestiae culpa nisi eaque. Esse a molestiae nostrum numquam sit et sint aut. Sit ut odio quia blanditiis et est ut possimus est.', 'sample_user_id', '63f002c4-14ec-4428-a257-815b88342d57', '2024-04-26 05:56:01.751', '2024-04-26 07:28:31.991'),
	('3651d324-2ca3-4871-bf6a-0d1256997ff6', '<p>OK</p>', 'aaa', 'e86769c8-188f-4df8-bffa-dc9de269b606', '2024-04-27 20:54:45.649', '2024-04-27 20:54:45.649'),
	('3e51b6a1-e635-4e49-90c3-6692c3a0f90a', '<p>Test</p>', 'aaa', '5fccbb01-0d3a-4e54-93ce-46874d96caef', '2024-04-26 14:37:20.920', '2024-04-26 14:37:20.920'),
	('4aaea2c0-2760-4e97-9d29-46a1a8081c0e', '<p>Indesign ❤️</p>', 'aaa', 'e2f83157-2ca6-4abf-9527-f69892c29b66', '2024-04-27 23:34:52.462', '2024-04-27 23:34:52.462'),
	('5369c1ac-ce78-4bc3-9632-dbeb6de5113e', '<p><span style="color: rgb(40, 40, 40);">My own photography, as I feel quite confident with my skill. Furthermore, I feel that my own photos are much more personal. Although some post cards are beautiful, I don’t feel that they&nbsp;</span><strong style="color: rgb(40, 40, 40);">hold a candle (compare)</strong><span style="color: rgb(40, 40, 40);">&nbsp;to my own.</span></p>', 'aaa', '7af2cc7b-0369-437f-83c6-fbbec76cb8cf', '2024-04-27 05:15:52.025', '2024-04-27 05:15:52.025'),
	('5c878e43-b3c3-4c15-87f0-a92b034ff5bf', 'Over five billion people are active internet users—more than 60% of the world\'s population. This increase has catalyzed a global digital transition and transformed life as we know it. Through this learning path, you will gain the skills to build websites for businesses around the world.\r\nDigital credentials are verified proof of your subject matter expertise. Once you earn your credentials from IBM, you can share them on your LinkedIn page or resume. Potential employers will review your credentials to validate your competency in critical skill areas.', 'aaa', '5fccbb01-0d3a-4e54-93ce-46874d96caef', '2024-04-26 11:23:58.886', '2024-04-26 11:23:58.886'),
	('7655a391-0ae5-4415-a1a3-32d1c9f9a831', '<p>Test <strong>mise</strong> en <em>forme</em></p>', 'aaa', '5fccbb01-0d3a-4e54-93ce-46874d96caef', '2024-04-26 12:45:34.810', '2024-04-26 12:45:34.810'),
	('77ed4565-ad38-4ee2-bac2-85cb2ffbce93', '<p><span>Photographs are an interesting topic to discuss as they are an indispensable part of our lives. They help us to relive our memories time and again with our favourite people in our best of times. The modes of photographs might have changed and several divisions might have come up, but its essence has not changed at all. But, in IELTS Speaking, you have to be careful with words as it is a formal setting and prepare yourself for it.</span></p>', 'aaa', '7af2cc7b-0369-437f-83c6-fbbec76cb8cf', '2024-04-27 05:15:28.757', '2024-04-27 05:15:28.757'),
	('79932878-7f37-4d82-9f6a-61b7c429a44b', 'Doloribus quia totam qui reprehenderit. Est similique accusamus sit recusandae ea cupiditate. Tempora amet ea earum libero neque dolores voluptatibus ducimus. Enim animi et omnis.', 'sample_user_id', 'e45f46c3-a1b8-4741-a7bf-c102305bb9ab', '2024-04-25 18:48:19.202', '2024-04-26 07:28:31.998'),
	('7a6bb347-1b5e-457a-82d7-46f766b3122d', 'Esse quis placeat sed laboriosam molestias nesciunt. Aut iusto quia temporibus repellendus quia qui ut. Mollitia temporibus amet accusamus expedita.', 'sample_user_id', 'e86769c8-188f-4df8-bffa-dc9de269b606', '2024-04-25 21:22:29.319', '2024-04-26 07:28:32.000'),
	('8634d160-b8fe-4a6a-9225-3e53521ca9cb', '<p>Test confetti v2</p>', 'aaa', '5fccbb01-0d3a-4e54-93ce-46874d96caef', '2024-04-27 23:45:44.275', '2024-04-27 23:45:44.275'),
	('8c5d2d07-fa6a-48fc-94c3-cb28225960bb', 'Laborum mollitia minus sit deserunt minus rerum aut. Vel voluptatem enim vitae quae voluptatibus non libero aut est. Ex quia omnis optio aut a.', 'sample_user_id', 'e405354e-85af-4af9-87ca-9764d2001d27', '2024-04-26 05:00:23.445', '2024-04-26 07:28:31.996'),
	('a5dc91e0-236e-4a42-bef4-9b730a29d9ff', '<p>OK</p>', 'aaa', '18447962-2923-4358-9e53-d402c93029c3', '2024-04-26 14:14:35.026', '2024-04-26 14:14:35.026'),
	('a9dd6ca6-1688-4b0b-a630-370d66fea18e', '<p>When integrating any of these editors into a Next.js project, make sure to handle client-side rendering and server-side rendering appropriately, especially if you\'re using Next.js\'s SSR (Server-Side Rendering) capabilities.</p>', 'aaa', '18447962-2923-4358-9e53-d402c93029c3', '2024-04-27 05:12:54.617', '2024-04-27 05:12:54.617'),
	('ab0c0c7a-e493-4d3c-b853-9c6093eb6db7', 'Vero et maxime. Sit rerum est eius fugit dicta recusandae excepturi. Possimus ut molestiae ea. Rerum culpa voluptas repellendus id nesciunt culpa sed. Omnis quisquam distinctio qui.', 'sample_user_id', '43171460-e432-431e-a650-5ac699cbbdc0', '2024-04-26 05:48:51.538', '2024-04-26 07:28:31.981'),
	('bef639c0-ee07-4fa1-9002-65e7a5aa6441', 'Sit sequi repellat dignissimos vero qui reprehenderit. Consectetur dolorum neque exercitationem quo totam. Id excepturi ut quaerat. Numquam necessitatibus facilis nihil commodi culpa esse labore ipsa nam. Aspernatur soluta dolor sint doloribus quo occaecati.', 'sample_user_id', 'e2f83157-2ca6-4abf-9527-f69892c29b66', '2024-04-26 07:20:25.651', '2024-04-26 07:28:31.994'),
	('c664b963-0ceb-4a64-b539-5465d4cfda5d', 'Distinctio vero iusto quasi harum praesentium ducimus hic aut. Recusandae iure ratione ad aspernatur. Aperiam nihil ut nihil voluptate et praesentium commodi maxime.', 'sample_user_id', '4cf8aeaa-842d-45d0-8e84-bbdce85268c0', '2024-04-26 06:02:54.479', '2024-04-26 07:28:31.989'),
	('c9f5f703-d8fb-4130-a095-53c3525cbdac', '<p>Top !</p>', 'aaa', '5fccbb01-0d3a-4e54-93ce-46874d96caef', '2024-04-27 23:45:23.673', '2024-04-27 23:45:23.673'),
	('cc0d052a-da63-4405-94e0-d34e657201a2', '<p>Hey</p>', 'aaa', '489a3a42-1b49-4e54-ab1f-c465501b47b1', '2024-04-27 22:58:08.210', '2024-04-27 22:58:08.210'),
	('cc39d24b-0793-42ea-8446-3615bc625b9f', '<p>To describe music, you will need a few key words. Firstly, we can use the word&nbsp;<strong>tempo</strong>&nbsp;to talk about whether music is fast or slow and the word&nbsp;<strong>melody</strong>&nbsp;to talk about the tune of the music.&nbsp;<strong>Harmony</strong>&nbsp;is the word we use to talk about the sound we make when we play several musical notes at the same time. If someone asks what&nbsp;<strong>genre</strong>&nbsp;of music you like, they just mean what style or type you prefer.</p>', 'aaa', 'ca792372-14a9-4396-8ed6-e16eceda1af3', '2024-04-29 09:54:47.577', '2024-04-29 09:54:47.577'),
	('d470d4ab-6f29-4daf-b5aa-d8947133c2d3', 'Officiis eos laudantium dolores ullam dolores quia nam cumque nulla. In nihil eum voluptatem. Illum ducimus eius iusto dolores iste harum ipsum temporibus. Rem nobis ipsum similique. Repellat facere tempora atque possimus id maiores id.', 'sample_user_id', '454ef783-67dd-4595-a32b-2006f89e4f57', '2024-04-26 06:50:00.744', '2024-04-26 07:28:31.984'),
	('dac9f4d8-3fde-4937-9d3e-604b12301e3a', '<p>Hourra</p>', 'aaa', '5fccbb01-0d3a-4e54-93ce-46874d96caef', '2024-04-27 04:56:43.360', '2024-04-27 04:56:43.360'),
	('e1983668-b470-468d-9cfe-f786b3947592', '<p><span style="color: rgb(0, 0, 0);">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</span></p>', 'aaa', '5fccbb01-0d3a-4e54-93ce-46874d96caef', '2024-04-26 13:17:03.458', '2024-04-26 13:17:03.458'),
	('e6f16ed5-3592-429e-9ba3-d2cefd88e371', '<p>Mon nouveau post</p>', 'aaa', 'e2f83157-2ca6-4abf-9527-f69892c29b66', '2024-04-27 23:34:04.993', '2024-04-27 23:34:04.993'),
	('ea180d7b-04aa-4fef-9c1a-dee7cc75b0bd', 'Sequi est quia quia sequi culpa a sunt perspiciatis adipisci. Qui voluptatum sit velit nobis aut qui numquam. Incidunt eum perspiciatis. Ut aut recusandae vitae dolor molestiae culpa dolore consequatur et. At dolorem veniam vero in et voluptatum.', 'sample_user_id', '489a3a42-1b49-4e54-ab1f-c465501b47b1', '2024-04-25 18:12:55.087', '2024-04-26 07:28:31.987'),
	('f5b21fe6-0a7f-4b9f-963f-0270be462820', 'Test confetti', 'aaa', '5fccbb01-0d3a-4e54-93ce-46874d96caef', '2024-04-26 11:53:20.501', '2024-04-26 11:53:20.501'),
	('ffe2430c-0103-4451-8939-a0c12b5ff857', '<p>Ok, topic unlocked !</p>', 'aaa', '454ef783-67dd-4595-a32b-2006f89e4f57', '2024-04-27 22:43:54.397', '2024-04-27 22:43:54.397'),
	('ffe55745-58df-486f-a5bb-85d1e1546d55', '<p><span style="color: rgb(51, 51, 51);">Based on their combined fifty years in the film and television industry, authors Kris Malkiewicz and M. David Mullen lay clear and concise groundwork for basic film techniques, focusing squarely on the cameraman\'s craft. Readers will then learn step-by-step how to master more advanced techniques in postproduction, digital editing, and overall film production.</span></p>', 'aaa', '3545f9e4-a580-43b0-bd05-6a6339774cfa', '2024-04-29 15:53:05.970', '2024-04-29 15:53:05.970');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;

-- Listage de la structure de la table next-forum. topic
CREATE TABLE IF NOT EXISTS `topic` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `categoryId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isLocked` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Topic_categoryId_idx` (`categoryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table next-forum.topic : ~14 rows (environ)
/*!40000 ALTER TABLE `topic` DISABLE KEYS */;
INSERT INTO `topic` (`id`, `title`, `userId`, `categoryId`, `isLocked`, `createdAt`, `updatedAt`) VALUES
	('18447962-2923-4358-9e53-d402c93029c3', 'Topic Computer Science', 'aaa', 'c605ff23-2f24-4276-9873-13907014df2c', 0, '2024-04-26 14:14:35.018', '2024-04-29 15:36:09.338'),
	('3545f9e4-a580-43b0-bd05-6a6339774cfa', 'Filming topic', 'aaa', 'b809d804-5282-428a-9d6f-a7861a728318', 0, '2024-04-29 15:53:05.945', '2024-04-29 15:53:05.945'),
	('43171460-e432-431e-a650-5ac699cbbdc0', 'quaerat voluptas aut', 'sample_user_id', 'e99eb48b-584b-4801-91f5-63cf11b580e8', 0, '2024-04-26 04:20:13.827', '2024-04-26 07:28:31.978'),
	('454ef783-67dd-4595-a32b-2006f89e4f57', 'porro hic saepe', 'sample_user_id', '9e82ea5d-aa5f-476c-b66d-882b1e0972ff', 1, '2024-04-26 05:48:25.733', '2024-04-27 22:43:59.057'),
	('489a3a42-1b49-4e54-ab1f-c465501b47b1', 'non blanditiis et', 'sample_user_id', '239ead62-dd2f-453a-9539-0e62067165a4', 0, '2024-04-25 08:49:35.722', '2024-04-26 07:28:31.963'),
	('4cf8aeaa-842d-45d0-8e84-bbdce85268c0', 'nulla pariatur qui', 'sample_user_id', 'a7d6335e-fce1-426c-b011-d6c77586fc74', 0, '2024-04-25 14:13:42.951', '2024-04-26 07:28:31.971'),
	('5fccbb01-0d3a-4e54-93ce-46874d96caef', 'Mon nouveau topic', 'aaa', '9e82ea5d-aa5f-476c-b66d-882b1e0972ff', 0, '2024-04-26 11:23:58.879', '2024-04-29 15:46:03.154'),
	('63f002c4-14ec-4428-a257-815b88342d57', 'illo laborum doloremque', 'sample_user_id', '3b7bfc48-249f-4f2c-b4e4-c87cbab5589a', 0, '2024-04-25 10:10:45.060', '2024-04-26 07:28:31.965'),
	('7af2cc7b-0369-437f-83c6-fbbec76cb8cf', 'New topic Photography', 'aaa', '9c972bba-c2d0-4c36-b7ab-639201755659', 1, '2024-04-27 05:15:28.732', '2024-04-27 22:58:40.714'),
	('adc539f4-e32b-4b33-9a1b-8da19f0b4115', 'Symfony', 'aaa', '9e82ea5d-aa5f-476c-b66d-882b1e0972ff', 1, '2024-04-29 19:26:09.611', '2024-04-29 19:26:48.996'),
	('ca792372-14a9-4396-8ed6-e16eceda1af3', 'Music topic', 'aaa', 'e99eb48b-584b-4801-91f5-63cf11b580e8', 0, '2024-04-29 09:54:47.551', '2024-04-29 09:54:47.551'),
	('e2f83157-2ca6-4abf-9527-f69892c29b66', 'omnis odit vitae', 'sample_user_id', '11a4d725-a3fd-4c24-b020-22e7125747fe', 0, '2024-04-25 21:19:37.880', '2024-04-26 07:28:31.959'),
	('e405354e-85af-4af9-87ca-9764d2001d27', 'accusantium iste repudiandae', 'sample_user_id', 'c605ff23-2f24-4276-9873-13907014df2c', 0, '2024-04-26 00:03:55.340', '2024-04-26 07:28:31.976'),
	('e45f46c3-a1b8-4741-a7bf-c102305bb9ab', 'quam et eum', 'sample_user_id', 'b809d804-5282-428a-9d6f-a7861a728318', 0, '2024-04-25 08:07:03.502', '2024-04-26 07:28:31.974'),
	('e86769c8-188f-4df8-bffa-dc9de269b606', 'autem nam aut', 'sample_user_id', '9c972bba-c2d0-4c36-b7ab-639201755659', 0, '2024-04-25 18:49:21.346', '2024-04-26 07:28:31.967');
/*!40000 ALTER TABLE `topic` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
