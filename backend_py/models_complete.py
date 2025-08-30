# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


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


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


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
