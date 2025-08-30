# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class CitiesdataTilts0Kt1977(models.Model):
    cityid = models.IntegerField(primary_key=True)  # The composite primary key (cityid, cityname) found, that is not supported. The first column is selected.
    cityname = models.CharField(max_length=50)
    citystate = models.CharField(max_length=50, blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    tilt0 = models.IntegerField(blank=True, null=True)
    jan = models.IntegerField(blank=True, null=True)
    feb = models.IntegerField(blank=True, null=True)
    mar = models.IntegerField(blank=True, null=True)
    apr = models.IntegerField(blank=True, null=True)
    may = models.IntegerField(blank=True, null=True)
    jun = models.IntegerField(blank=True, null=True)
    jul = models.IntegerField(blank=True, null=True)
    aug = models.IntegerField(blank=True, null=True)
    sep = models.IntegerField(blank=True, null=True)
    oct = models.IntegerField(blank=True, null=True)
    nov = models.IntegerField(blank=True, null=True)
    dec = models.IntegerField(blank=True, null=True)
    average = models.FloatField(blank=True, null=True)
    delta = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'citiesdata_tilts0_kt1977'
        unique_together = (('cityid', 'cityname'),)


class CitiesdataTiltslatitudesKt1977(models.Model):
    cityid = models.IntegerField(primary_key=True)  # The composite primary key (cityid, cityname) found, that is not supported. The first column is selected.
    cityname = models.CharField(max_length=50)
    citystate = models.CharField(max_length=50, blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    tilt_equal_latitude = models.IntegerField(blank=True, null=True)
    jan = models.FloatField(blank=True, null=True)
    feb = models.FloatField(blank=True, null=True)
    mar = models.FloatField(blank=True, null=True)
    apr = models.FloatField(blank=True, null=True)
    may = models.FloatField(blank=True, null=True)
    jun = models.FloatField(blank=True, null=True)
    jul = models.FloatField(blank=True, null=True)
    aug = models.FloatField(blank=True, null=True)
    sep = models.FloatField(blank=True, null=True)
    oct = models.FloatField(blank=True, null=True)
    nov = models.FloatField(blank=True, null=True)
    dec = models.FloatField(blank=True, null=True)
    average = models.FloatField(blank=True, null=True)
    delta = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'citiesdata_tiltslatitudes_kt1977'
        unique_together = (('cityid', 'cityname'),)


class CitiesdataTiltsmaxminmonthlypoaKt1977(models.Model):
    cityid = models.IntegerField(primary_key=True)  # The composite primary key (cityid, cityname) found, that is not supported. The first column is selected.
    cityname = models.CharField(max_length=50)
    citystate = models.CharField(max_length=50, blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    tilt_maxminmonthlypoa = models.IntegerField(blank=True, null=True)
    jan = models.FloatField(blank=True, null=True)
    feb = models.FloatField(blank=True, null=True)
    mar = models.FloatField(blank=True, null=True)
    apr = models.FloatField(blank=True, null=True)
    may = models.FloatField(blank=True, null=True)
    jun = models.FloatField(blank=True, null=True)
    jul = models.FloatField(blank=True, null=True)
    aug = models.FloatField(blank=True, null=True)
    sep = models.FloatField(blank=True, null=True)
    oct = models.FloatField(blank=True, null=True)
    nov = models.FloatField(blank=True, null=True)
    dec = models.FloatField(blank=True, null=True)
    average = models.FloatField(blank=True, null=True)
    delta = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'citiesdata_tiltsmaxminmonthlypoa_kt1977'
        unique_together = (('cityid', 'cityname'),)


class CitiesdataTiltsmaxpoaannualKt1977(models.Model):
    cityid = models.IntegerField(primary_key=True)  # The composite primary key (cityid, cityname) found, that is not supported. The first column is selected.
    cityname = models.CharField(max_length=50)
    citystate = models.CharField(max_length=50, blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    tilt_maxannualpoa = models.IntegerField(blank=True, null=True)
    jan = models.FloatField(blank=True, null=True)
    feb = models.FloatField(blank=True, null=True)
    mar = models.FloatField(blank=True, null=True)
    apr = models.FloatField(blank=True, null=True)
    may = models.FloatField(blank=True, null=True)
    jun = models.FloatField(blank=True, null=True)
    jul = models.FloatField(blank=True, null=True)
    aug = models.FloatField(blank=True, null=True)
    sep = models.FloatField(blank=True, null=True)
    oct = models.FloatField(blank=True, null=True)
    nov = models.FloatField(blank=True, null=True)
    dec = models.FloatField(blank=True, null=True)
    average = models.FloatField(blank=True, null=True)
    delta = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'citiesdata_tiltsmaxpoaannual_kt1977'
        unique_together = (('cityid', 'cityname'),)


class DiffuseMeans(models.Model):
    id = models.IntegerField(primary_key=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    lon = models.FloatField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    annual = models.IntegerField(blank=True, null=True)
    jan = models.IntegerField(blank=True, null=True)
    feb = models.IntegerField(blank=True, null=True)
    mar = models.IntegerField(blank=True, null=True)
    apr = models.IntegerField(blank=True, null=True)
    may = models.IntegerField(blank=True, null=True)
    jun = models.IntegerField(blank=True, null=True)
    jul = models.IntegerField(blank=True, null=True)
    aug = models.IntegerField(blank=True, null=True)
    sep = models.IntegerField(blank=True, null=True)
    oct = models.IntegerField(blank=True, null=True)
    nov = models.IntegerField(blank=True, null=True)
    dec = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'diffuse_means'


class DirectNormalMeans(models.Model):
    id = models.IntegerField(primary_key=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    lon = models.FloatField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    annual = models.IntegerField(blank=True, null=True)
    jan = models.IntegerField(blank=True, null=True)
    feb = models.IntegerField(blank=True, null=True)
    mar = models.IntegerField(blank=True, null=True)
    apr = models.IntegerField(blank=True, null=True)
    may = models.IntegerField(blank=True, null=True)
    jun = models.IntegerField(blank=True, null=True)
    jul = models.IntegerField(blank=True, null=True)
    aug = models.IntegerField(blank=True, null=True)
    sep = models.IntegerField(blank=True, null=True)
    oct = models.IntegerField(blank=True, null=True)
    nov = models.IntegerField(blank=True, null=True)
    dec = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'direct_normal_means'


class GhiMeans(models.Model):
    id = models.IntegerField(primary_key=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    lon = models.FloatField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    annual = models.IntegerField(blank=True, null=True)
    jan = models.IntegerField(blank=True, null=True)
    feb = models.IntegerField(blank=True, null=True)
    mar = models.IntegerField(blank=True, null=True)
    apr = models.IntegerField(blank=True, null=True)
    may = models.IntegerField(blank=True, null=True)
    jun = models.IntegerField(blank=True, null=True)
    jul = models.IntegerField(blank=True, null=True)
    aug = models.IntegerField(blank=True, null=True)
    sep = models.IntegerField(blank=True, null=True)
    oct = models.IntegerField(blank=True, null=True)
    nov = models.IntegerField(blank=True, null=True)
    dec = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ghi_means'


class GlobalHorizontalMeans(models.Model):
    id = models.IntegerField(primary_key=True)
    country = models.IntegerField(blank=True, null=True)
    lon = models.FloatField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    annual = models.IntegerField(blank=True, null=True)
    jan = models.IntegerField(blank=True, null=True)
    feb = models.IntegerField(blank=True, null=True)
    mar = models.IntegerField(blank=True, null=True)
    apr = models.IntegerField(blank=True, null=True)
    may = models.IntegerField(blank=True, null=True)
    jun = models.IntegerField(blank=True, null=True)
    jul = models.IntegerField(blank=True, null=True)
    aug = models.IntegerField(blank=True, null=True)
    sep = models.IntegerField(blank=True, null=True)
    oct = models.IntegerField(blank=True, null=True)
    nov = models.IntegerField(blank=True, null=True)
    dec = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'global_horizontal_means'


class ParMeansSedesMunic(models.Model):
    id = models.IntegerField(primary_key=True)  # The composite primary key (id, name) found, that is not supported. The first column is selected.
    lon = models.FloatField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    name = models.CharField(max_length=50)
    class_field = models.CharField(db_column='class', max_length=50, blank=True, null=True)  # Field renamed because it was a Python reserved word.
    state = models.CharField(max_length=50, blank=True, null=True)
    annual = models.IntegerField(blank=True, null=True)
    jan = models.IntegerField(blank=True, null=True)
    feb = models.IntegerField(blank=True, null=True)
    mar = models.IntegerField(blank=True, null=True)
    apr = models.IntegerField(blank=True, null=True)
    may = models.IntegerField(blank=True, null=True)
    jun = models.IntegerField(blank=True, null=True)
    jul = models.IntegerField(blank=True, null=True)
    aug = models.IntegerField(blank=True, null=True)
    sep = models.IntegerField(blank=True, null=True)
    oct = models.IntegerField(blank=True, null=True)
    nov = models.IntegerField(blank=True, null=True)
    dec = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'par_means_sedes_munic'
        unique_together = (('id', 'name'),)

class TiltedLatitudeMeansSedesMunic(models.Model):
    id = models.IntegerField(primary_key=True)  # The composite primary key (id, name) found, that is not supported. The first column is selected.
    lon = models.FloatField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    name = models.CharField(max_length=50)
    class_field = models.CharField(db_column='class', max_length=50, blank=True, null=True)  # Field renamed because it was a Python reserved word.
    state = models.CharField(max_length=50, blank=True, null=True)
    annual = models.IntegerField(blank=True, null=True)
    jan = models.IntegerField(blank=True, null=True)
    feb = models.IntegerField(blank=True, null=True)
    mar = models.IntegerField(blank=True, null=True)
    apr = models.IntegerField(blank=True, null=True)
    may = models.IntegerField(blank=True, null=True)
    jun = models.IntegerField(blank=True, null=True)
    jul = models.IntegerField(blank=True, null=True)
    aug = models.IntegerField(blank=True, null=True)
    sep = models.IntegerField(blank=True, null=True)
    oct = models.IntegerField(blank=True, null=True)
    nov = models.IntegerField(blank=True, null=True)
    dec = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tilted_latitude_means_sedes_munic'
        unique_together = (('id', 'name'),)

class DirectNormalMeansSedesMunic(models.Model):
    id = models.IntegerField(primary_key=True)  # The composite primary key (id, name) found, that is not supported. The first column is selected.
    lon = models.FloatField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    name = models.CharField(max_length=50)
    class_field = models.CharField(db_column='class', max_length=50, blank=True, null=True)  # Field renamed because it was a Python reserved word.
    state = models.CharField(max_length=50, blank=True, null=True)
    annual = models.IntegerField(blank=True, null=True)
    jan = models.IntegerField(blank=True, null=True)
    feb = models.IntegerField(blank=True, null=True)
    mar = models.IntegerField(blank=True, null=True)
    apr = models.IntegerField(blank=True, null=True)
    may = models.IntegerField(blank=True, null=True)
    jun = models.IntegerField(blank=True, null=True)
    jul = models.IntegerField(blank=True, null=True)
    aug = models.IntegerField(blank=True, null=True)
    sep = models.IntegerField(blank=True, null=True)
    oct = models.IntegerField(blank=True, null=True)
    nov = models.IntegerField(blank=True, null=True)
    dec = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'direct_normal_means_sedes_munic'
        unique_together = (('id', 'name'),)

class DiffuseMeansSedesMunic(models.Model):
    id = models.IntegerField(primary_key=True)  # The composite primary key (id, name) found, that is not supported. The first column is selected.
    lon = models.FloatField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    name = models.CharField(max_length=50)
    class_field = models.CharField(db_column='class', max_length=50, blank=True, null=True)  # Field renamed because it was a Python reserved word.
    state = models.CharField(max_length=50, blank=True, null=True)
    annual = models.IntegerField(blank=True, null=True)
    jan = models.IntegerField(blank=True, null=True)
    feb = models.IntegerField(blank=True, null=True)
    mar = models.IntegerField(blank=True, null=True)
    apr = models.IntegerField(blank=True, null=True)
    may = models.IntegerField(blank=True, null=True)
    jun = models.IntegerField(blank=True, null=True)
    jul = models.IntegerField(blank=True, null=True)
    aug = models.IntegerField(blank=True, null=True)
    sep = models.IntegerField(blank=True, null=True)
    oct = models.IntegerField(blank=True, null=True)
    nov = models.IntegerField(blank=True, null=True)
    dec = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'diffuse_means_sedes_munic'
        unique_together = (('id', 'name'),)

class GlobalHorizontalMeansSedesMunic(models.Model):
    id = models.IntegerField(primary_key=True)  # The composite primary key (id, name) found, that is not supported. The first column is selected.
    lon = models.FloatField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    name = models.CharField(max_length=50)
    class_field = models.CharField(db_column='class', max_length=50, blank=True, null=True)  # Field renamed because it was a Python reserved word.
    state = models.CharField(max_length=50, blank=True, null=True)
    annual = models.IntegerField(blank=True, null=True)
    jan = models.IntegerField(blank=True, null=True)
    feb = models.IntegerField(blank=True, null=True)
    mar = models.IntegerField(blank=True, null=True)
    apr = models.IntegerField(blank=True, null=True)
    may = models.IntegerField(blank=True, null=True)
    jun = models.IntegerField(blank=True, null=True)
    jul = models.IntegerField(blank=True, null=True)
    aug = models.IntegerField(blank=True, null=True)
    sep = models.IntegerField(blank=True, null=True)
    oct = models.IntegerField(blank=True, null=True)
    nov = models.IntegerField(blank=True, null=True)
    dec = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'global_horizontal_means_sedes_munic'
        unique_together = (('id', 'name'),)


class ParMeans(models.Model):
    id = models.IntegerField(primary_key=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    lon = models.FloatField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    annual = models.IntegerField(blank=True, null=True)
    jan = models.IntegerField(blank=True, null=True)
    feb = models.IntegerField(blank=True, null=True)
    mar = models.IntegerField(blank=True, null=True)
    apr = models.IntegerField(blank=True, null=True)
    may = models.IntegerField(blank=True, null=True)
    jun = models.IntegerField(blank=True, null=True)
    jul = models.IntegerField(blank=True, null=True)
    aug = models.IntegerField(blank=True, null=True)
    sep = models.IntegerField(blank=True, null=True)
    oct = models.IntegerField(blank=True, null=True)
    nov = models.IntegerField(blank=True, null=True)
    dec = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'par_means'


class TiltedLatitudeMeans(models.Model):
    id = models.IntegerField(primary_key=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    lon = models.FloatField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    annual = models.IntegerField(blank=True, null=True)
    jan = models.IntegerField(blank=True, null=True)
    feb = models.IntegerField(blank=True, null=True)
    mar = models.IntegerField(blank=True, null=True)
    apr = models.IntegerField(blank=True, null=True)
    may = models.IntegerField(blank=True, null=True)
    jun = models.IntegerField(blank=True, null=True)
    jul = models.IntegerField(blank=True, null=True)
    aug = models.IntegerField(blank=True, null=True)
    sep = models.IntegerField(blank=True, null=True)
    oct = models.IntegerField(blank=True, null=True)
    nov = models.IntegerField(blank=True, null=True)
    dec = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tilted_latitude_means'
