package com.ssafy.dingdong.domain.room.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.dingdong.domain.room.dto.response.FurnitureSummaryDto;
import com.ssafy.dingdong.domain.room.dto.response.RoomResponseDto;
import com.ssafy.dingdong.domain.room.entity.Room;
import com.ssafy.dingdong.domain.room.repository.FurnitureRepository;
import com.ssafy.dingdong.domain.room.repository.RoomFurnitureRepository;
import com.ssafy.dingdong.domain.room.repository.RoomRepository;
import com.ssafy.dingdong.global.exception.CustomException;
import com.ssafy.dingdong.global.exception.ExceptionStatus;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService{

    private final RoomRepository roomRepository;
    private final RoomFurnitureRepository roomFurnitureRepository;
    private final FurnitureRepository furnitureRepository;

    @Override
    @Transactional
    public RoomResponseDto getRoomByMemberId(String memberId) {
        Room findRoom = roomRepository.findByMemberId(memberId).orElseThrow(
            () -> new CustomException(ExceptionStatus.ROOM_NOT_FOUND)
        );
        return findRoom.toRoomResponseDto();
    }

    @Override
    @Transactional
    public RoomResponseDto getRoomByRoomId(Long roomId) {
        Room findRoom = roomRepository.findByRoomId(roomId).orElseThrow(
            () -> new CustomException(ExceptionStatus.ROOM_NOT_FOUND)
        );
        return findRoom.toRoomResponseDto();
    }

    @Override
    public void createRoom(String memberId) {
        Room room = Room.builder()
                .memberId(memberId)
                .build();
        roomRepository.save(room);
    }

    @Override
    public Page<FurnitureSummaryDto> getFurnitureList(Pageable pageable) {
        return furnitureRepository.findAllFurnitureSummaryDto(pageable);

    }

    @Override
    public Page<FurnitureSummaryDto> getFurnitureListByCategory(Integer category, Pageable pageable) {
        return furnitureRepository.findAllByCategoryId(category, pageable);
    }

}
