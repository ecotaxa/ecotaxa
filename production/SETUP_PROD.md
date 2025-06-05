# Setting up an EcoTaxa production environment  
## Postgresql and extensions
Postgresql (version 14.18) 
```
psql -U postgres -d dbname -h localhost -p 5432
```
- pg_repack 
    cron of pg_repack 
    ```
    0 23 * * 6 pg_repack -U postgres -d dbname -h localhost -p 5432 -E DEBUG
    ```
- pgvector https://github.com/pgvector/pgvector

## config files 
ecotaxaback config file is config.ini in $PWD/back_mnt/  and ecotaxafront config file is config.cfg in $PWD/front_mnt as set in docker-compose.yml 

## Docker 
in docker-compose.yml , modify images versions, volumes network config if you need an then run :
```
docker-compose up -d 
```
3 containers are started for frontend, backend and GPU calculations:
- ecotaxafront 
- ecotaxaback 
- ecotaxagpuback

add the docker network ecotaxa subnet ip range or only the ecotaxaback container ip to the ph_hba.conf file of Postgresql
