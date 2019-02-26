CREATE TABLE `t_burgers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `devoured` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
SELECT * FROM q34m909m618pxtxf.t_burgers;